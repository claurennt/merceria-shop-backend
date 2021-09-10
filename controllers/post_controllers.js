const ProductSchema = require('../schema/ProductSchema');
const createModel = require('../utils/createModel');
const errorHandler = require('../middlewares/errorHandler');

//controller to insert a new document in the collection
const insert_new_product = async (req, res) => {
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
    /*create new model,i.e. collection first, 
    and new document in the collection with the data passed in the req.body*/
    const newProduct = await createModel(category, ProductSchema).create({
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
