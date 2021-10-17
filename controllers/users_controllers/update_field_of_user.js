const User = require("../../db/models/UsersModel");

const update_field_of_user = async (req, res, next) => {
  //retrieve the id
  const { _id } = req.user;
  console.log({ r: req.user });
  const condition = req.body;
  if (!condition)
    return res
      .status(400)
      .send("Please provide a key/value pair of the field you want to update");

  const user = await User.findByIdAndUpdate({ id: _id }, condition, {
    new: true,
  });
  console.log(user);
};

module.exports = { update_field_of_user };
