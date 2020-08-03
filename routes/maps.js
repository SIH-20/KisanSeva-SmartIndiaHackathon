const express=require('express');
const router=express.Router();
const mapController= require('../controllers/map_controller');

router.get('/', mapController.maps);
router.get('/getData',mapController.getData);
router.post('/fetch-heatmap-data/crop',mapController.fetchCrop);
router.get('/chart',mapController.chart);
router.get('/markers',mapController.markers);
router.get('/farmer',mapController.farmer);
module.exports=router;