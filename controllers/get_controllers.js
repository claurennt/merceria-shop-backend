const ProductSchema = require('../schema/ProductSchema');
const createModel = require('../utils/createModel');

const get_all_products_by_category = async (req, res) => {
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
    res.status(500).send({ message: err });
  }
};

module.exports = { get_all_products_by_category };
