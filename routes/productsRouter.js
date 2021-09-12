const express = require('express');
const productsRouter = express.Router();

//controllers imports
const insert_new_product = require('../controllers/post_controllers');
const {
  get_all_products_of_collection_by_gender,
  get_one_product_by_id,
} = require('../controllers/get_controllers');
const {
  delete_product_by_id,
  delete_multiple_products,
} = require('../controllers/delete_controllers');

//routes
productsRouter
  .route(
    //use path-to-regexp module to limit the params
    '/:genere(donna|uomo|kids)/:categoria(maglie|intimo|canottiere|vestaglie|pigiami|calze)'
  )
  .post(insert_new_product)
  .get(get_all_products_of_collection_by_gender)
  .delete(delete_multiple_products);

productsRouter
  .route(
    //use path-to-regexp module to limit the params
    '/:genere(donna|uomo|kids)/:categoria(maglie|intimo|canottiere|vestaglie|pigiami|calze)/:id'
  )
  .get(get_one_product_by_id)
  .delete(delete_product_by_id);

module.exports = productsRouter;
