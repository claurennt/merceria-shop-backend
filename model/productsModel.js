// here we create our schema and the  compile our schema into a model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* the schema is the blueprint of our  model*/
const ProductSchema = new Schema({
  pic_src: { type: String },
  name: {
    type: String,
    uppercase: true,
    required: true,
  },
  category: { type: String, uppercase: true, required: true },
  brand: { type: String, required: true },
  material: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: Array, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number },
});

ProductSchema.add({ category: { type: String, required: true } });

// the models is built upon the schema we just defined

const Calze = mongoose.model('Calze', ProductSchema);

const Canottiere = mongoose.model('Canottiere', ProductSchema);

const Intimo = mongoose.model('Intimo', ProductSchema);

const Pigiami = mongoose.model('Pigiami', ProductSchema);

const Maglie = mongoose.model('Maglie', ProductSchema);

const CamicieDaNotte = mongoose.model('CamicieDaNotte', ProductSchema);

module.exports = { Calze, Canottiere, Intimo, Pigiami, Maglie, CamicieDaNotte };
