const collections = require('../model/ProductsModel');
const defineCollection = require('../utils/defineCollection');

//controller to insert a new document in the collection
const insert_new_product = async (req, res, next) => {
  const {
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
    //define the collection we are using based on the url param
    const Collection = defineCollection(category, collections);

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
