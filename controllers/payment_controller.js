var express = require('express'),
    router = express.Router(),
    stripe = require('stripe')('sk_test_eWQQ4UsI4UMyEwGpT1e9uJfj00udOO6ZRo'),
    bodyParser = require('body-parser'),
    Transaction = require('../models/transaction'),
    Order = require('../models/Order'),
    Cart = require('../models/Cart'),
    block = require('../blockchain/index'),
    generatePdf = require('../utilitis/pdfGenerator'),
    mailer = require('../mailer/payment');

router.get('/pay', async function (req, res) {

    try {
        let order = await Cart.findById(req.query.orderId);
        session = await stripe.checkout.sessions.create({
            customer_email: req.user.email,
            payment_method_types: ['card'],
            line_items: [
                {
                    name: `Buyfresh Payment Gateway`,
                    quantity: 1,
                    currency: 'inr',
                    description: '(Inclusive of 2% transaction charges)',
                    images: ['https://drive.google.com/uc?id=1pi0meQST2sfriYUafHR-Iy1ycwqXDXFk'],
                    amount: [parseInt(order.amount) + parseInt(req.query.deliveryCost)] * 100
                    // Keep the amount on the server to prevent customers from manipulating
                }
            ],
            metadata: {
                type: req.params.type,
                // checkWebhook: 'Attendee'
            },
            // session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
            success_url: `https://buyfreshdtu.xyz/order/payment/success?session_id={CHECKOUT_SESSION_ID}&orderId=${req.query.orderId}&deliveryCost=${req.query.deliveryCost}`,
            cancel_url: `https://buyfreshdtu.xyz/order/transactionFailed?orderId=${req.query.orderId}`
        });
        return res.render('pay', {
            title: 'Payment',
            sessionId: session.id
        });
    }
    catch (err) {
        console.log(err);
    }

});



router.get('/success', async function (req, res) {
    let cart = await Cart.findById(req.query.orderId)
    let neworder = await Order.create({
        orderQuantity: cart.orderQuantity,
        buyer: req.user._id,
        amount: cart.amount,
        delivery: cart.delivery
    });
    let order = await Order.findById(neworder._id).populate('buyer').populate({
        path: 'orderQuantity',
        populate: {
            path: 'item'
        }
    }
    ).exec();
    let receiptNumber = Math.random() * 100000;
    receiptNumber = receiptNumber.toFixed(0);
    let transaction = await Transaction.create({
        order: neworder._id,
        sessionId: req.query.session_id,
        paidAmount: parseInt(order.amount) + parseInt(req.query.deliveryCost),
        receiptNumber: receiptNumber
    });
    await Cart.deleteOne({ buyer: req.user._id });
    order.completed = true;
    await order.save();
    const invoice = {
        shipping: {
            name: `${order.buyer.first_name} ${order.buyer.last_name}`,
            address: order.buyer.address,
            city: "DEHRADUN",
            state: "U.K.",
            country: "INDIA",
            postal_code: 244001
        },
        items: order.orderQuantity,
        delivery : parseInt(req.query.deliveryCost),
        subtotal: parseInt(order.amount) + parseInt(req.query.deliveryCost),
        paid: parseInt(order.amount) + parseInt(req.query.deliveryCost),
        invoice_nr: receiptNumber
    };
    generatePdf(invoice);
    var data = {
        sessionId: req.query.session_id,
        amount: parseInt(order.amount) + parseInt(req.query.deliveryCost)
    }
   mailer.mail(data, order.buyer.email);
    return res.render('success', { sessionId: req.query.session_id, orderId : neworder._id });
});

module.exports = router;