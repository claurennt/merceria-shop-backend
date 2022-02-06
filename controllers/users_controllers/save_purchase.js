const User = require("../../db/models/UsersModel");

const save_purchase = async (req, res) => {
  const { email } = req.body;

  const buyer = await User.findOneAndUpdate(
    { email },
    { purchase: req.body.items }
  );

  return res.status(200).send(buyer);
};

module.exports = { save_purchase };
