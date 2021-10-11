const express = require('express');
const productsRouter = express.Router();

//param validator middlewares imports
const {
  paramsValidationChain,
  paramsValidationChainWithId,
} = require('../middlewares/validators/validators');

//controllers imports
const {
  insert_new_product,
} = require('../controllers/products_controllers/post_controllers');
const {
  get_all_products_of_collection_by_gender,
  get_one_product_by_id,
  display_upload_form,
} = require('../controllers/products_controllers/get_controllers');
const {
  delete_product_by_id,
  delete_multiple_products,
} = require('../controllers/products_controllers/delete_controllers');
const {
  update_product_by_id,
} = require('../controllers/products_controllers/put_controllers');

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
  .delete(paramsValidationChain, delete_multiple_products)
  .get(paramsValidationChain, get_all_products_of_collection_by_gender);

//route specific validation chain, for route with params genere, categoria and id

productsRouter
  .route(
    //use path-to-regexp module to limit the params
    // '/:categoria(maglie|intimo|canottiere|vestaglie|pigiami|calze)/:id'
    '/:genere/:categoria/:id'
  )
  .delete(paramsValidationChainWithId, delete_product_by_id)
  .get(paramsValidationChainWithId, get_one_product_by_id)
  .put(paramsValidationChainWithId, update_product_by_id);

module.exports = productsRouter;
