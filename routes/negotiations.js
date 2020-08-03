const express=require('express');
const router=express.Router();
const negotiationController=require('../controllers/negotiate_controller');
const passport = require('passport');

router.get('/begin', negotiationController.beginNegotiate);
router.post('/translate',negotiationController.translator);
router.get('/getNegotiations',passport.checkAuthentication,negotiationController.getNegotiation);

module.exports=router;