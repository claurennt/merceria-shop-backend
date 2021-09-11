const collections = require('../model/ProductsModel');
const capitalizeFirstLetter = require('../utils/capitalizeFirstLetter');

const delete_product_by_id = async (req, res, next) => {
  const { id, categoria } = req.params;

  try {
    //capitalize the first letter of the category for the exact matching of the computer property
    categoria = capitalizeFirstLetter(categoria);

    //create the collections based on the computed property of the collection object matching the url param
    const Collection = collections[categoria];

    //retrieve deletedCount key from the result of the deleteOne method
    const { deletedCount } = await Collection.deleteOne({
      _id: id,
      category: categoria,
    });

    //if deletedCount is falsey send an NotFound error message
    if (!deletedCount) {
      res
        .status(404)
        .send('The product you are trying to delete does not exist');
    } else {
      //else notify that the product was deleted
      res.status(200).send('Product Deleted Successfully');
    }
  } catch (err) {
    next(err);
  }
};

module.exports = delete_product_by_id;
