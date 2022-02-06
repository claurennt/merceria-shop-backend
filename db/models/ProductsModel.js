// here we create our schema and the  compile our schema into a model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { merceriaClient } = require("../Clients");
// here we create our schema and the  compile our schema into a model
const User = require("./UsersModel");

// the schema is the blueprint of our  model
const productSchema = new Schema({
  pic_src: { type: String },
  product_name: {
    type: String,
    //required: true,
    uppercase: true,
  },
  category: {
    type: String,

    required: true,
    enum: ["calze", "intimo", "vestaglie", "pigiami", "maglie", "canottiere"],
    message: "{VALUE} is not a supported category.",
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
  Vestaglie: merceriaClient.model("Vestaglie", productSchema),
  Calze: merceriaClient.model("Calze", productSchema),
  Intimo: merceriaClient.model("Intimo", productSchema),
  Pigiami: merceriaClient.model("Pigiami", productSchema),
  Maglie: merceriaClient.model("Maglie", productSchema),
  Canottiere: merceriaClient.model("Canottiere", productSchema),
};

module.exports = collections;
