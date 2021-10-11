const User = '../../db/models/UsersModel';

// const bcrypt = require('bcrypt');

const create_new_user = (req, res, next) => {
  const { email, password, role } = req.body;

  // try{
  //   let admin = User.find({ role: "admin" });
  //   if (admin) return res.status(400).json({ message: "Unauthorized: You can only create a user profile." });

  //   admin =
  //   const Users
  // }
};

module.exports = { create_new_user };
