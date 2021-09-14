// here we create our schema and the  compile our schema into a model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// the schema is the blueprint of our  model
const ProductSchema = new Schema({
  pic_src: { type: String },
  name: {
    type: String,
    uppercase: true,
    required: true,
  },
  category: {
    type: String,

    required: true,
    enum: ['calze, intimo', 'vestaglie', 'pigiami', 'maglie', 'canottiere'],
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
  Vestaglie: mongoose.model('Vestaglie', ProductSchema),
  Calze: mongoose.model('Calze', ProductSchema),
  Intimo: mongoose.model('Intimo', ProductSchema),
  Pigiami: mongoose.model('Pigiami', ProductSchema),
  Maglie: mongoose.model('Maglie', ProductSchema),
  Canottiere: mongoose.model('Canottiere', ProductSchema),
};

module.exports = collections;
