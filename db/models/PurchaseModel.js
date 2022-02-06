// here we create our schema and the  compile our schema into a model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { merceriaClient } = require("../Clients");
// here we create our schema and the  compile our schema into a model
const User = require("./UsersModel");

const purchaseSchema = new Schema({
  product_name: {
    type: String,
  },
  category: {
    type: String,
  },
  gender: { type: String },
  brand: { type: String },
  material: { type: String },
  color: { type: String },
  size: { type: String },
  price: { type: Number },
});

const Purchase = merceriaClient.model("Purchase", purchaseSchema);

module.exports = Purchase;
