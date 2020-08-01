const express=require('express');
const router=express.Router();
const Item = require('../models/item'); 
const homeController=require('../controllers/home_controller');


router.get('/upload-form',homeController.upload_form);
router.get('/', async function(req,res){
   let item =await Item.find({ farmer: req.user.id });
    return res.render('farmer_dashBoard',{
        items:item
    });
});

module.exports=router;