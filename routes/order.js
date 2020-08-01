const express = require('express');
const router = express.Router();
const passport = require('passport');
const orderController = require('../controllers/order_controller');
const paymentController = require('../controllers/payment_controller');
const { route } = require('../controllers/payment_controller');
const middleware = require('../config/middlewares');

router.get('/shopping-cart', orderController.shoppingCart);
router.post('/add-to-cart', passport.checkAuthentication, orderController.toggleCart);
router.get("/buy_product/:id", orderController.buyProduct);
router.get('/checkout', middleware.address, orderController.shoppingCart);
router.get('/transactionFailed', orderController.transactionFailed);
router.get('/remove-from-cart/:itemId', passport.checkAuthentication, orderController.removeFromCart);
router.use('/payment', paymentController);
router.get('/proceedForPayment', middleware.verified, orderController.paymentProcedure);
router.get('/getCartItems', orderController.getItems);
router.get('/getSellers', orderController.getSellers);
router.post('/feedback/:id', orderController.feedback);
router.get('/getComments/:id', orderController.getComments)
module.exports = router;