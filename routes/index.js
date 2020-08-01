const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controllers/home_controller');
const itemController = require('../controllers/items_controller');
router.get('/ecommerce', homeController.ecommerce);
router.get('/contact', homeController.contact);
router.use('/api', require('./api'));
router.post('/upload-item', passport.checkAuthentication, itemController.upload);
router.use('/users', require('./user'));
router.post('/sms', homeController.sms);
router.get('/sms', homeController.showSms)
router.use('/farmer', require('./farmer.js'));
router.use('/maps', require('./maps'));
router.get("/logistics",homeController.logistics);
router.use('/order', passport.checkAuthentication, require('./order'));
router.get('/pastOrders', passport.checkAuthentication, homeController.allOrders)
router.get('/', homeController.home);
router.post("/search", homeController.search);
router.get('/team',homeController.team)
router.get('/shop',homeController.shop)
router.use('/negotiate',require('./negotiations'));
module.exports = router;