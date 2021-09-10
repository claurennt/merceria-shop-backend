const collections = require('../model/ProductsModel');
const capitalizeFirstLetter = require('../utils/capitalizeFirstLetter');
const errorHandler = require('../middlewares/errorHandler');

//controller to insert a new document in the collection
const insert_new_product = async (req, res, next) => {
  let {
    pic_src,
    name,
    category,
    gender,
    brand,
    material,
    color,
    size,
    price,
    description,
  } = req.body;

  try {
    //capitalize the first letter of the category for the exact matching of the computer property
    category = capitalizeFirstLetter(category);

    //create the collections based on the computed property of the collection object matching the url param
    const Collection = collections[category];

    const newProduct = await Collection.create({
      pic_src,
      name,
      category,
      gender,
      brand,
      material,
      color,
      size,
      price,
      description,
    });
    //send back the new added document
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
};

module.exports = insert_new_product;
