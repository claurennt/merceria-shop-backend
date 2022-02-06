const collections = require("../../db/models/ProductsModel");
const queryString = require("query-string");
const defineCollection = require("../../utils/defineCollection");
const objHasEmptyKey = require("../../utils/objHasEmptyKey");

// controller to insert a new document in the collection
// eslint-disable-next-line consistent-return
const insert_new_product = async (req, res, next) => {
  const { token } = req.body;

  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res
      .status(403)
      .send("You do not have the rights to post a new product");
  }
  if (objHasEmptyKey(req.body) || !req.file) {
    // if the req.body has missing values notify the user and exit
    return res
      .status(404)
      .send(
        "Bad Request: please provide values for all the following keys: pic_src, name, category, gender, brand, material, color, size, price, description."
      );
  }

  const { category } = req.body;

  const { destination, filename } = req.file;

  // split destination path
  const imagePath = destination.split(".")[1];

  try {
    // define the collection we are using based on the url param
    const Collection = defineCollection(category, collections);

    // create the new product document in the collection with the req.body data
    const newProduct = await Collection.create({
      ...req.body,
      pic_src: `${imagePath}/${filename}`,
    });

    // send back the new added document
    res.render("productOverview", { newProduct });
  } catch (err) {
    next(err);
  }
};

module.exports = { insert_new_product };
