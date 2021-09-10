const ProductSchema = require('../schema/ProductSchema');
const createModel = require('../utils/createModel');
const errorHandler = require('../middlewares/errorHandler');

const delete_product_by_id = async (req, res, next) => {
  const { id, categoria } = req.params;

  //create model out of category passed in the url and imported schema
  const Product = createModel(categoria, ProductSchema);

  try {
    //retrieve deletedCount key from the result of the deleteOne method
    const { deletedCount } = await Product.deleteOne({
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
