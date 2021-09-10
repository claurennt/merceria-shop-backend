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
    enum: ['Calze, Intimo', 'Vestaglie', 'Pigiami', 'Maglie', 'Canottiere'],
    message: '{VALUE} is not a supported category.',
  },
  gender: { type: String, required: true },
  brand: { type: String, required: true },
  material: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: Array, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
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
