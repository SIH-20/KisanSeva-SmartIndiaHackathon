const Block = require('../models/Block');
const CryptoJs = require("crypto-js");

class Blockchain {

    constructor () {
        // Initialize empty list of pending transactions
        this.currentTransactions = [];
    }

    async init () {
        // Create genesis block
        await this.createGenesisBlock();
    }

    // Add new transaction to current transaction list
    newTransaction (data) {
        this.currentTransactions.push(data);
    }

    // Create genesis/first block
    async createGenesisBlock () {
        // Get chain
        const chain = await this.getChain();
        if (chain.length === 0) {
            // When no blocks available
            console.log('Creating fresh chain');
            await this.newBlock(true);
        }
    }

    // Get all blocks
    async getChain () {
        let chain = await Block.find().exec();
        chain = chain.map(block => block.data);
        this.chain = chain;
        return chain;
    }

    // Reset blockchain
    async reset () {
        await Block.deleteMany().exec();
        await this.init();
        this.currentTransactions = [];
    }

    // Find POW
    proofOfWork (lastBlockHash, currentTransactionHash){
        return new Promise((resolve, reject) => {
            let proof = 0;
            while (!this.isValidProof(lastBlockHash, currentTransactionHash, proof))
                proof += 1;
            return resolve(proof);        
        });
    }

    // Check if proof is valid
    isValidProof (lastBlockHash, currentTransactionHash, proof){
        let hash = CryptoJs.SHA256(`${lastBlockHash}${currentTransactionHash}${proof}`).toString(CryptoJs.enc.Hex);
        return hash.substr(0, 4) == "0000";
    }

    // Create new block
    async newBlock (genesis) {

        if (this.currentTransactions.length === 0 && genesis !== true)
            return;

        // Calculate previous hash
        const chain = await this.getChain();
        const lastBlock = chain[chain.length - 1];
        let previousHash = null;
        if (chain.length > 0)
            previousHash = CryptoJs.SHA256(JSON.stringify(lastBlock)).toString(CryptoJs.enc.Hex);
        const currentTransactionHash = CryptoJs.SHA256(this.currentTransactions).toString(CryptoJs.enc.Hex);

        // Get POW
        const nonce = await this.proofOfWork(previousHash, currentTransactionHash);

        // Define block contents
        const block = {
            index: chain.length,
            timestamp: Date.now(),
            transactions: this.currentTransactions,
            previousHash: previousHash,
            nonce: nonce,
        };

        // Add to block
        const newBlock = await Block.create({
            data: block
        });
        
        // Clear current transactions list
        this.currentTransactions = [];
    }
}

const blockchain = new Blockchain();
blockchain.init()
    .catch(console.log)
    .then(() => {
        setInterval(async () => {
            await blockchain.newBlock();
        }, 15000);
    })

module.exports = blockchain;