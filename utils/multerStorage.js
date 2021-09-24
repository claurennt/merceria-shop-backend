const multer = require('multer');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    //extract properties to create file name
    const { category, brand, gender, color } = req.body;

    //extract original name and file extension
    const { originalname } = file;
    const fileExtension = originalname.split('.')[1];

    //create part of the name out of the post fields
    const filename = `${category}_${gender}-${brand}-${color}-${Date.now()}.${fileExtension}`;

    cb(null, filename);
  },
});
// console.log({ test: multerStorage.getFilename() });
module.exports = multerStorage;
