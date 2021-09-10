const ProductSchema = require('../schema/ProductSchema');
const createModel = require('../utils/createModel');
const errorHandler = require('../middlewares/errorHandler');

const get_all_products_by_category = async (req, res, next) => {
  //retrieve the param from the url for the query filtering
  const { categoria, genere } = req.params;

  //create the model out of the category and the imported schema
  const Product = createModel(categoria, ProductSchema);

  try {
    //filter the products of the collection that have the category and the gender passed in the url
    const products = await Product.find({
      category: categoria,
      gender: genere,
    });
    //send back the found products
    res.json(products);
  } catch (err) {
    next(err);
  }
};

const get_one_product_by_id = async (req, res, next) => {
  const { genere, categoria, id } = req.params;

  //create the model out of the category and the imported schema
  const Product = createModel(categoria, ProductSchema);

  try {
    /*retrieve the item of a specific collection and gender by its id */
    const item = await Product.findOne({
      gender: genere,
      category: categoria,
      _id: id,
    });

    res.json(item);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  get_all_products_by_category,
  get_one_product_by_id,
};
