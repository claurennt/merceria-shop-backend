const express = require('express');
const productsRouter = express.Router();
const insert_new_product = require('../controllers/post_controllers');
const {
  get_all_products_by_category,
  get_one_product_by_id,
} = require('../controllers/get_controllers');

//
productsRouter
  .route('/:genere/:categoria')
  .post(insert_new_product)
  .get(get_all_products_by_category, get_one_product_by_id);

productsRouter.route('/:genere/:categoria/:id').get(get_one_product_by_id);
module.exports = productsRouter;
