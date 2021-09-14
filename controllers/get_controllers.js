const collections = require('../model/ProductsModel');
const defineCollection = require('../utils/defineCollection');

//list all products of a collection by gender
const get_all_products_of_collection_by_gender = async (req, res, next) => {
  //retrieve the param from the url for the query filtering
  const { genere, categoria } = req.params;

  try {
    //define the collection we are using based on the url param
    const Collection = defineCollection(categoria, collections);

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

//get one product by category, id and gender
const get_one_product_by_id = async (req, res, next) => {
  const { categoria, id } = req.params;

  try {
    //define the collection we are using based on the url param
    const Collection = defineCollection(categoria, collections);

    /*retrieve the item of a specific collection and gender by its id */
    const item = await Collection.findOne({
      _id: id,
    });
    //send an error if no item matches the params
    return !item
      ? res
          .status(404)
          .send(
            `We could not find any items matching categoria:${categoria} and id:${id}`
          )
      : //else send back the found item
        res.json(item);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  get_all_products_of_collection_by_gender,
  get_one_product_by_id,
};
