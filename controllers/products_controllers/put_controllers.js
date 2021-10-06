const collections = require('../../db/models/ProductsModel');
const defineCollection = require('../../utils/defineCollection');

const update_product_by_id = async (req, res) => {
  const { id, categoria } = req.params;

  try {
    //define the collection we are using based on the url param
    const Collection = defineCollection(categoria, collections);

    /* this method requires the id, the updated body {...req.body} 
            and the option new:true so that it returns the new updated object and runValidators 
            so that it accepts only the enum data from the model*/
    const updatedProduct = await Collection.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    return !updatedProduct
      ? res
          .status(404)
          .send('The product you are trying to update does not exist')
      : res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

module.exports = { update_product_by_id };
