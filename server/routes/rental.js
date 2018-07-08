const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function(req, res) {
  Rental.find({}, function(err, foundRentals) {
    if (err) {
      res.status(422).json({
        errors: [
          {
            source: '/rentals',
            title: 'Rental Error',
            description: 'Could not find Rentals!'
          }
        ]
      });
    } else {
      res.status(200).json({ data: foundRentals });
    }
  });
});

router.get('/:id', function(req, res) {
  const rentalId = req.params.id;
  Rental.findById(rentalId, function(err, foundRental) {
    if (err) {
      res.status(422).json({
        errors: [
          {
            source: '/rentals/:id',
            title: 'Rental Error',
            description: 'Could not find Rental!'
          }
        ]
      });
    } else {
      res.status(200).json({ data: foundRental });
    }
  });
});

module.exports = router;