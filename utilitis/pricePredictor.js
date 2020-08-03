const distanceCalculator = require('./distanceCalculator');
const Cart = require('../models/Cart');
const Uttarkhand = require('../models/UttarkhandModel')
const axios = require('axios');
const qs = require('querystring')
const PricePerKilometer = [1, 5, 10];
module.exports = async function (req, orderId) {
    return new Promise(async function (resolve, reject) {
        try {
            var citiesCovered = new Array;
            let orderPlaced = await Cart.findById(orderId).populate({
                path: 'orderQuantity',
                populate: {
                    path: 'item',
                    populate: {
                        path: 'farmer'
                    }
                }
            });
            let deliveryAmount = 0;
            var ordersArray = orderPlaced.orderQuantity;
            let requestBody = {
                grant_type: 'client_credentials',
                client_id: 'c7F2yGW8kQXOwCTyQpG0eE05xRYqYboxi2GtElPt26MGCDRoTKpQtmka7n0i_Honu2s96619A1mTk9q9yXmn7wCMoSozzTz5',
                client_secret: 'QJcH6ymTGawqeiq4ccH5fxbvKFt3QQ7GaneZfmfb-oaYUj0M_ueU6IkZVWWAYagKejC8vuaNUEAEof1avLznLS2Et91EAaAkSP1pW0qkfx0='
            };
            let access_token = await axios.post('https://outpost.mapmyindia.com/api/security/oauth/token', qs.stringify(requestBody), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            let buyerCoordinates = await axios.get(`https://atlas.mapmyindia.com/api/places/geocode?address=${req.user.address}`, {
                headers: {
                    Authorization: access_token.data.access_token
                }
            });
            for (order in ordersArray) {
                let farmerDistrict = await axios.get(`https://atlas.mapmyindia.com/api/places/geocode?address=${ordersArray[order].item.farmer.address}`, {
                    headers: {
                        Authorization: access_token.data.access_token
                    }
                });
                if (!citiesCovered.includes(ordersArray[order].item.farmer.address)) {
                    let distance = distanceCalculator(buyerCoordinates.data.copResults.latitude, buyerCoordinates.data.copResults.longitude, farmerDistrict.data.copResults.latitude, farmerDistrict.data.copResults.longitude);
                    let data = {
                        distance: distance,
                        quantity: ordersArray[order].quantity
                    }
                    citiesCovered[`${ordersArray[order].item.farmer.address}`] = data;
                } else {
                    let data = citiesCovered[ordersArray[order].item.farmer.address];
                    let newQuantity = data.quantity + ordersArray[order].quantity;
                    data.quantity = newQuantity;
                    citiesCovered[`${ordersArray[order].item.farmer.address}`] = data;
                }
            }
            for (city in citiesCovered) {
                let truck = -1;
                if (citiesCovered[city].quantity <= 50) { truck = 0 }
                else if (citiesCovered[city].quantity > 50 && citiesCovered[city].quantity < 100) {
                    truck = 1;
                } else {
                    truck = 2;
                }
                deliveryAmount += (citiesCovered[city].distance * PricePerKilometer[truck]);
            }
            let amount = {
                deliveryAmount: Math.ceil(deliveryAmount),
                itemTotal: orderPlaced.amount
            }
            resolve(amount);
        } catch (err) {
            console.log(err);
            reject(new Error('Cannot Predict The Price'));
        }
    })
}