const collections = require('../model/ProductsModel');
const defineCollection = require('../utils/defineCollection');

//controller to insert a new document in the collection
const insert_new_product = async (req, res, next) => {
  //if the req.body has missing values notify the user and exit
  if (Object.entries(req.body).length < 9 || !req.file) {
    return res
      .status(404)
      .send(
        'Bad Request: please provide values for all the following keys: pic_src, name, category, gender, brand, material, color, size, price, description.'
      );
  }
  const { category } = req.body;

  const { destination, filename } = req.file;

  //split destination path
  const imagePath = destination.split('.')[1];

  console.log({ body: req.body, file: req.file });

  try {
    //define the collection we are using based on the url param
    const Collection = defineCollection(category, collections);

    //create the new product document in the collection with the req.body data
    const newProduct = await Collection.create({
      ...req.body,
      pic_src: `${imagePath}/${filename}`,
    });

    //send back the new added document
    res.render('productOverview', { newProduct: newProduct });
  } catch (err) {
    next(err);
  }
};

module.exports = insert_new_product;
