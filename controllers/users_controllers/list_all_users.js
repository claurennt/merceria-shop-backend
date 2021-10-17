const User = require("../../db/models/UsersModel");

const list_all_users = async (req, res, next) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
module.exports = list_all_users;
