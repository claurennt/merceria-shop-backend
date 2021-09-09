const capitalizeFirstLetter = require('./capitalizeFirstLetter');
const mongoose = require('mongoose');
//small function to automate the creation of a new model
const createModel = (product, schema) => {
  //capitalize first letter of the product according to the conventions
  product = capitalizeFirstLetter(product);
  //return model function
  return mongoose.model(product.toString(), schema);
};

module.exports = createModel;
