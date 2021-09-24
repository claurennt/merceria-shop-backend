const multerFilter = (req, file, cb) => {
  file.mimetype.split('.') === 'png' || 'jpeg' || 'jpg'
    ? cb(null, true)
    : cb(null, false);
};

module.exports = multerFilter;
