const express = require('express');
const router = express.Router();
const farmerController = require('../../../controllers/api/mobile/farmer_controller');
const passport = require('passport')

router.get('/info', farmerController.info);
router.get('/allOrders',farmerController.allOrders);
router.get('/portal/allProducts',farmerController.allProducts);
router.post('/upload',farmerController.uploadItem);
router.put('/update',farmerController.update);
router.put('/updateItem',farmerController.updateItem);
router.put('/delete',farmerController.deleteItem);
router.get('/feedback',farmerController.feedback);

module.exports = router;