const collections = require('../model/ProductsModel');
const defineCollection = require('../utils/defineCollection');

//controller to insert a new document in the collection
const insert_new_product = async (req, res, next) => {
  // const {
  //   pic_src,
  //   name,
  //   category,
  //   gender,
  //   brand,
  //   material,
  //   color,
  //   size,
  //   price,
  //   description,
  // } = req.body;
  console.log({ file: req.file });
  console.log(req.body);
  // if (
  //   !pic_src ||
  //   !name ||
  //   !category ||
  //   !gender ||
  //   !brand ||
  //   !material ||
  //   !color ||
  //   !size ||
  //   !price ||
  //   !description
  // )
  //   //if the req.body has missing values notify the user and exit
  //   return res
  //     .status(404)
  //     .send(
  //       'Bad Request: please provide values for the all the following keys: pic_src, name, category, gender, brand, material, color, size, price, description.'
  //     );

  try {
    //define the collection we are using based on the url param
    const Collection = defineCollection(category, collections);

    //create the new product document in the collection with the req.body data
    const newProduct = await Collection.create({
      ...req.body,
    });
    //send back the new added document
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
};

module.exports = insert_new_product;
