const express = require('express');
const productsRouter = express.Router();
const { param, check } = require('express-validator');
//validator middlewares imports
const validateParams = require('../middlewares/validators/paramsValidator');
const validateError = require('../middlewares/validators/validatorError');

//controllers imports
const insert_new_product = require('../controllers/post_controllers');
const {
  get_all_products_of_collection_by_gender,
  get_one_product_by_id,
  display_upload_form,
} = require('../controllers/get_controllers');
const {
  delete_product_by_id,
  delete_multiple_products,
} = require('../controllers/delete_controllers');
const { update_product_by_id } = require('../controllers/put_controllers');

//multer import for image upload
const multerUpload = require('../middlewares/multer/multerUpload');

//routes
productsRouter
  .route('/aggiungi/')
  .get(display_upload_form)
  .post(multerUpload, insert_new_product);

productsRouter
  .route(
    //use path-to-regexp module to limit the params
    // '/:genere(donna|uomo|kids)/:categoria(maglie|intimo|canottiere|vestaglie|pigiami|calze)'
    '/:genere/:categoria/'
  )
  .delete([validateParams, validateError], delete_multiple_products)
  .get(
    [validateParams(), validateError],
    get_all_products_of_collection_by_gender
  );

productsRouter
  .route(
    //use path-to-regexp module to limit the params
    // '/:categoria(maglie|intimo|canottiere|vestaglie|pigiami|calze)/:id'
    '/:genere/:categoria/:id'
  )
  .delete([validateParams(), validateError], delete_product_by_id)
  .get(
    validateParams(),
    validateError,

    get_one_product_by_id
  )
  .put([validateParams(), validateError], update_product_by_id);

module.exports = productsRouter;
