const collections = require('../model/ProductsModel');
const capitalizeFirstLetter = require('../utils/capitalizeFirstLetter');
const errorHandler = require('../middlewares/errorHandler');

const get_all_products_of_collection_by_gender = async (req, res, next) => {
  //retrieve the param from the url for the query filtering
  let { categoria, genere } = req.params;

  //capitalize the first letter of the category for the exact matching of the computer property
  categoria = capitalizeFirstLetter(categoria);

  //create the collections based on the computed property of the collection object matching the url param
  const Collection = collections[categoria];

  try {
    //filter the products of the collection that have the category and the gender passed in the url
    const products = await Collection.find({
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
  get_all_products_of_collection_by_gender,
  get_one_product_by_id,
};
