const collections = require('../model/ProductsModel');
const defineCollection = require('../utils/defineCollection');

//function to delete only one product
const delete_product_by_id = async (req, res, next) => {
  const { id, categoria } = req.params;

  try {
    //define the collection we are using based on the url param
    const Collection = defineCollection(categoria, collections);

    //retrieve deletedCount key from the result of the deleteOne method
    const { deletedCount } = await Collection.deleteOne({
      _id: id,
      category: categoria,
    });

    //if deletedCount is falsey send an NotFound error message
    return !deletedCount
      ? res
          .status(404)
          .send('The product you are trying to delete does not exist')
      : //else notify that the product was deleted
        res.status(200).send('Product Deleted Successfully');
  } catch (err) {
    next(err);
  }
};

//function to delete more than one product
const delete_multiple_products = async (req, res, next) => {
  const { genere, categoria } = req.params;

  const { condition } = req.body;
  try {
    //define the collection we are using based on the url param
    const Collection = defineCollection(categoria, collections);

    if (!condition) {
      //if no condition as filter all items from the gender & cetegory passed in the url get deleted
      const { deletedCount } = await Collection.deleteMany({
        gender: genere,
      });
      return res
        .status(200)
        .send(
          `You have successfully deleted all the items (total number ${deletedCount}) from ${categoria} collection`
        );
    }

    /*if the condition is valid we proceed to delete the items of the gender passed 
    in the url matching a certain condition*/
    if (condition) {
      const { deletedCount } = await Collection.deleteMany({
        [key]: value,
      });

      return !deletedCount
        ? res
            .status(404)
            .send('We could not find any items matching your filter')
        : res
            .status(200)
            .send(
              `You have successfully deleted ${deletedCount} items from ${categoria} collection whose key ${key} matche ${value}`
            );
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { delete_product_by_id, delete_multiple_products };
