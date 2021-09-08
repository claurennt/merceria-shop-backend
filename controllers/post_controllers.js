const {
  Calze,
  Canottiere,
  Intimo,
  Pigiami,
  Maglie,
  CamicieDaNotte,
} = require('../model/productsModel');

const capitalizeFirstLetter = require('../utils/capitalizeFirstLetter');

//controller to insert a new document in the collection, retrieved by the category key of the body
const insert_new_product = async (req, res) => {
  const {
    pic_src,
    name,
    category,
    brand,
    material,
    color,
    size,
    price,
    description,
  } = req.body;

  //uppercase first letter of category key
  const prodModel = capitalizeFirstLetter(category);
  console.log(typeof prodModel);
  try {
    const newProduct = await Pigiami.create({
      pic_src,
      name,
      category,
      brand,
      material,
      color,
      size,
      price,
      description,
    });
    res.json(newProduct);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = insert_new_product;
