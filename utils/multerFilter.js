const multerFilter = (req, file, cb) => {
  return file.mimetype.split('/')[1].match(/^(png|jpeg|jpg)$/gi)
    ? cb(null, true)
    : //throw an error if the mimetype is not an image, i.e. does not have extension jpg, jpeg or png
      cb(new Error('please upload only jpeg/jpg/png files'), false);
};

module.exports = multerFilter;
