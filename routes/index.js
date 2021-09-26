const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerFilter = require('../utils/multerFilter');
const multerStorage = require('../utils/multerStorage');

const uploadOptions = multer({
  fileFilter: multerFilter,
  storage: multerStorage,
}).single('pic_src');

//controllers imports
const insert_new_product = require('../controllers/post_controllers');
const { display_upload_form } = require('../controllers/get_controllers');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;
