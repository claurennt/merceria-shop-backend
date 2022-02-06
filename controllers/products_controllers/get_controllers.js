/* eslint-disable consistent-return */
const collections = require('../../db/models/ProductsModel');
const defineCollection = require('../../utils/defineCollection');

// list all products of a collection by gender

const get_all_products_of_collection_by_gender = async (req, res, next) => {
  // retrieve the param from the url for the query filtering
  const { genere, categoria } = req.params;

  try {
    // define the collection we are using based on the url param
    const Collection = defineCollection(categoria, collections);

    // filter the products of the collection that have the category and the gender passed in the url
    const products = await Collection.find({
      gender: genere,
    });

    // send back the found products
    return products
      ? res.status(200).send(products)
      : res
          .status(200)
          .send('The request was successfull, but the collection is empty');
  } catch (err) {
    next(err);
  }
};

// get one product by category, id and gender
const get_one_product_by_id = async (req, res, next) => {
  const { categoria, id } = req.params;

  try {
    // define the collection we are using based on the url param
    const Collection = defineCollection(categoria, collections);
    console.log(Collection);
    // retrieve the item of a specific collection and gender by its id
    const product = await Collection.findOne({
      _id: id,
    });
    Collection.findOne({ _id: id })
      .populate({ path: 'customer', model: 'User' })
      .exec(function (err, p) {
        console.log(p);

        console.log('The author is %s', err);
        // prints "The author is Ian Fleming"
      });
    // send an error if no item matches the params
    return !product
      ? res.status(404).send(`We could not find any product matching id:${id}`)
      : // else send back the found item with its picture
        res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

// display form to add a new product
const display_upload_form = (req, res, next) => {
  try {
    res.render('uploadForm');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  get_all_products_of_collection_by_gender,
  get_one_product_by_id,
  display_upload_form,
};
