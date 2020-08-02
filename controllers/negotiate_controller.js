const Negotiation = require("../models/negotiations");
const Item = require("../models/item");
const Quantity = require("../models/item_quantity");
const translator = require("../googleTranslation");
const templates = require("../config/messageTemplates");
const Cart = require('../models/Cart');

module.exports.getNegotiation = async (req, res) => {
    try {
        let cart = await Negotiation.find({$and: [{ buyer: req.user._id }, { status: false }]}).populate('item');
        if (cart) {
            return res.status(200).json({
                data: cart,
            });
        }
    } catch (e) {
        console.log(e);
        return;
    }
}

module.exports.beginNegotiate = async (req, res) => {
    var praposedAmount = parseInt(req.query.amount);
    var itemId = req.query.itemId;
    var quantity = parseInt(req.query.quantity);
    let code = Math.floor(Math.random() * 10000);
    let item = await Item.findById(itemId).populate("farmer");
    let negotiation = await Negotiation.findOne({ $and: [{ buyer: req.user._id }, { item: itemId }] });
    if (negotiation) {
        return res.status(404).json({
            message: 'Item under negotiation',
        });
    } else {
        await Negotiation.create({
            buyer: req.user._id,
            farmer: item.farmer._id,
            praposedPrice: praposedAmount,
            code: code,
            quantity: quantity,
            item: itemId,
        });
        let messageString = templates.farmerTemplateDisagree(
            item.farmer.name,
            item.title,
            quantity,
            praposedAmount,
            code
        );
        translator(messageString, item.farmer.phone);

        return res.status(200).json({
            message: "Negotiation initiated",
        });
    }
};

module.exports.translator = async (req, res) => {
    console.log('Message Received')
    let message = req.body.content;
    let mobile = req.body.sender.substr(2);
    let contents = message.split(" ");
    let code = parseInt(contents[1].trim());
    let answer = parseInt(contents[2].trim());

    let negotiation = await Negotiation.findOne({ code: code })
        .populate("buyer")
        .populate("farmer")
        .populate("item")
        .exec();
    if (
        typeof (code) == "number" &&
        negotiation &&
        contents.length >= 3 &&
        contents.length <= 4 &&
        (mobile == negotiation.buyer.phone || mobile == negotiation.farmer.phone)
    ) {
        if (typeof answer == "number") {
            if (answer == 0) {
                let amount = parseInt(contents[3].trim());
                negotiation.praposedPrice = amount;
                negotiation.save();
                if (negotiation.buyer.phone == mobile) {
                    let messageString = templates.farmerTemplateDisagree(
                        negotiation.farmer.name,
                        negotiation.item.title,
                        negotiation.quantity,
                        amount,
                        negotiation.code
                    );
                    translator(messageString, negotiation.farmer.phone);
                } else if (negotiation.farmer.phone) {
                    // send sms to buyer
                    let messageString = templates.buyerTemplateDisagree(
                        negotiation.buyer.name,
                        negotiation.quantity,
                        negotiation.item.name,
                        amount,
                        negotiation.code
                    );
                    translator(messageString, negotiation.buyer.phone);
                }
            } else if (answer == 1) {
                // the price is accepted and negotiations end
                let amount = negotiation.praposedPrice;
                let cart = await Cart.findOne({ buyer: negotiation.buyer._id });
                let item = await Item.findById(negotiation.item);
                if (item.stock_quantity < negotiation.quantity) {
                    let messageString = templates.stockTemplate(negotiation.item.title);
                    translator(messageString, negotiation.buyer.phone);
                    return;
                } else {
                    if (cart == null) {
                        let cartAmount = parseInt(amount) * parseInt(negotiation.quantity);
                        let newCart = await Cart.create({
                            buyer: negotiation.buyer._id,
                            amount: cartAmount,
                        });

                        let item_quantity = await Quantity.create({
                            item: negotiation.item,
                            quantity: negotiation.quantity,
                            cart: newCart._id,
                            price: amount,
                        });

                        newCart.orderQuantity.push(item_quantity._id);
                        await newCart.save();
                        item.stock_quantity = item.stock_quantity - negotiation.quantity;
                        await item.save();
                        let farmerString = templates.farmerTemplateDone(
                            negotiation.farmer.name,
                            negotiation.item.title
                        );
                        translator(farmerString, negotiation.farmer.phone);
                        //send mssg for buyer
                        let buyerString = templates.buyerTemplateAgree(
                            negotiation.buyer.name,
                            negotiation.item.title
                        );
                        //  translator(buyerString, negotiation.buyer.phone);
                    } else {
                        let itemExisted = await Quantity.findOne({
                            cart: cart.id,
                            item: negotiation.item,
                        }).exec();
                        if (itemExisted) {
                            let cartAmount = cart.amount;
                            cartAmount =
                                cartAmount - itemExisted.price * itemExisted.quantity;
                            cartAmount =
                                cartAmount + parseInt(amount) * parseInt(negotiation.quantity);
                            cart.amount = cartAmount;
                            await cart.save();

                            itemExisted.quantity = parseInt(negotiation.quantity);
                            await itemExisted.save();

                            item.stock_quantity =
                                item.stock_quantity -
                                negotiation.quantity +
                                itemExisted.quantity;
                            await item.save();
                            // Send confirmation message
                            let farmerString = templates.farmerTemplateDone(
                                negotiation.farmer.name,
                                negotiation.item.title
                            );
                            translator(farmerString, negotiation.farmer.phone);
                            //send mssg for buyer
                            let buyerString = templates.buyerTemplateAgree(
                                negotiation.buyer.name,
                                negotiation.item.title
                            );
                            translator(buyerString, negotiation.buyer.phone);
                        } else {
                            let cartAmount = cart.amount;
                            cartAmount = cartAmount + parseInt(amount) * parseInt(negotiation.quantity);
                            cart.amount = cartAmount;
                            await cart.save();

                            let item_quantity = await Quantity.create({
                                item: negotiation.item,
                                quantity: negotiation.quantity,
                                cart: cart._id,
                                price: amount,
                            });

                            await cart.orderQuantity.push(item_quantity._id);
                            await cart.save();

                            item.stock_quantity = item.stock_quantity - negotiation.quantity;
                            await item.save();
                            // Send confirmation message
                            let farmerString = templates.farmerTemplateDone(
                                negotiation.farmer.name,
                                negotiation.item.title
                            );
                            translator(farmerString, negotiation.farmer.phone);
                            //send mssg for buyer
                            let buyerString = templates.buyerTemplateAgree(
                                negotiation.buyer.name,
                                negotiation.item.title
                            );
                            translator(buyerString, negotiation.buyer.phone);
                        }
                    }
                }
                negotiation.status = true;
                await negotiation.save();
            } else if (answer == 2) {
                // await Negotiation.deleteOne({ _id: negotiation._id });
                // Send sms to both buyer and farmer that negotion is ended without deciding the price
                // The negotiation ended without any price change as one of them denied
                negotiation.status = true;
                await negotiation.save();
                let farmerString = templates.end(negotiation.farmer.name);
                let buyerString = templates.end(negotiation.buyer.name);
                translator(farmerString, negotiation.farmer.phone);
                translator(buyerString, negotiation.buyerString);

            } else {
                // Send error message
                // The answer should either be 0 or 1 or 2
                let errorString = templates.errorTemplate;
                translator(errorString, mobile)  //enter the phone for second argument
            }
        } else {
            // Send error message
            // The answer should be a number not a alphabetic character
            let errorString = templates.errorTemplate;
            translator(errorString, mobile)  //enter the phone for second argument
        }
    } else {

        let errorString = templates.errorTemplate;
        console.log('error')
        translator(errorString, mobile)  //enter the phone for second argument

        // Send error message
        // The message format is worng or the phone number is not registered
    }
};
