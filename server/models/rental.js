const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

console.log( moment().toString() );
const rentalSchema = new Schema({
  title: {type: String, require: true, max: [128, 'Too long, max 128 chars']},
  city: {type: String, require: true, lowercase: true},
  street: {type: String, require: true, min: [4, 'Too short, min 4 chars']},
  category: {type: String, require: true, lowercase: true},
  image: {type: String, require: true},
  bedrooms: Number,
  shared: Boolean,
  description: {type: String, require: true},
  dailyRates: Number,
  createAt: {
    type: Date,
    default: Date.now,
    get: v => moment(v).format('YYYY-MM-DD HH:mm')
  }
});

module.exports = mongoose.model('Rental', rentalSchema);