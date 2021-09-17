const express = require('express');
const productsRouter = express.Router();
const multer = require('multer');
const multerFilter = require('../middlewares/multerFilter');
const upload = multer({ multerFilter });

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

//routes
productsRouter
  .route(
    //use path-to-regexp module to limit the params
    '/:genere(donna|uomo|kids)/:categoria(maglie|intimo|canottiere|vestaglie|pigiami|calze)'
  )
  .delete(delete_multiple_products)
  .get(get_all_products_of_collection_by_gender)
  .post(insert_new_product);

productsRouter
  .route(
    //use path-to-regexp module to limit the params
    '/:categoria(maglie|intimo|canottiere|vestaglie|pigiami|calze)/:id'
  )
  .delete(delete_product_by_id)
  .get(get_one_product_by_id)
  .put(update_product_by_id);

productsRouter.route('/aggiungi').get(display_upload_form);

productsRouter.post('/aggiungi', upload.single('pic_src'), insert_new_product);
module.exports = productsRouter;
