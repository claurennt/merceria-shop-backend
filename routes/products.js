const express = require('express');
const productsRouter = express.Router();

//controllers imports
const insert_new_product = require('../controllers/post_controllers');
const {
  get_all_products_of_collection_by_gender,
  get_one_product_by_id,
} = require('../controllers/get_controllers');
const delete_product_by_id = require('../controllers/delete_controllers');

//routes
productsRouter
  .route(
    //use path-to-regexp module to limit the params
    '/:genere(donna|uomo|kids)/:categoria(Maglie|Intimo|Canottiere|Vestaglie|Pigiami|Calze)'
  )
  .post(insert_new_product)
  .get(get_all_products_of_collection_by_gender);

productsRouter
  .route(
    //use path-to-regexp module to limit the params
    '/:genere(donna|uomo|kids)/:categoria(Maglie|Intimo|Canottiere|Vestaglie|Pigiami|Calze)/:id'
  )
  .get(get_one_product_by_id);

productsRouter.route('/:id').delete(delete_product_by_id);

module.exports = productsRouter;
