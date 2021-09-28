const multerFilter = require('./multerFilter');
const multerStorage = require('./multerStorage');
const multer = require('multer');

//create multer instance with imported filters,storage and filename options
const multerUpload = multer({
  fileFilter: multerFilter,
  storage: multerStorage,
}).single('pic_src');

module.exports = multerUpload;
