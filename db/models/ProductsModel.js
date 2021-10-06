// here we create our schema and the  compile our schema into a model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// the schema is the blueprint of our  model
const productSchema = new Schema({
  pic_src: { type: String },
  name: {
    type: String,
    uppercase: true,
    required: true,
  },
  category: {
    type: String,

    required: true,
    enum: ['calze', 'intimo', 'vestaglie', 'pigiami', 'maglie', 'canottiere'],
    message: '{VALUE} is not a supported category.',
  },
  gender: { type: String },
  brand: { type: String },
  material: { type: String },
  color: { type: String },
  size: { type: Array },
  price: { type: Number },
  description: { type: String },
  stock: { type: Number },
});

//create the model out of the imported schema
const collections = {
  Vestaglie: mongoose.model('Vestaglie', productSchema),
  Calze: mongoose.model('Calze', productSchema),
  Intimo: mongoose.model('Intimo', productSchema),
  Pigiami: mongoose.model('Pigiami', productSchema),
  Maglie: mongoose.model('Maglie', productSchema),
  Canottiere: mongoose.model('Canottiere', productSchema),
};

module.exports = collections;