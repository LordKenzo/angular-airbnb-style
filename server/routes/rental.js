const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function(req, res){
  Rental.find({}, function(err, foundRentals) {
    res.json({success: true, data: foundRentals});
  });
});

module.exports = router;