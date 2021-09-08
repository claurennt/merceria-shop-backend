const {
  Calze,
  Canottiere,
  Intimo,
  Pigiami,
  Maglie,
  CamicieDaNotte,
} = require('../model/productsModel');

const get_all_products_by_category = async (req, res) => {
  const { categoria } = req.params;

  try {
    //retrieve only products matching the url parameter
    const products = await Pigiami.find({ category: categoria });
    res.json(products);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = { get_all_products_by_category };
