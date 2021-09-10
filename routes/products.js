const express = require('express');
const productsRouter = express.Router();

//controllers imports
const insert_new_product = require('../controllers/post_controllers');
const {
  get_all_products_by_category,
  get_one_product_by_id,
} = require('../controllers/get_controllers');
const delete_product_by_id = require('../controllers/delete_controllers');

//routes
productsRouter
  .route('/:genere/:categoria')
  .post(insert_new_product)
  .get(get_all_products_by_category);

productsRouter.route('/:genere/:categoria/:id').get(get_one_product_by_id);

productsRouter.route('/:categoria/:id').delete(delete_product_by_id);

module.exports = productsRouter;
