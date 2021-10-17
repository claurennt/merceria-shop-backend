const User = require("../../db/models/UsersModel");

const bcrypt = require("bcrypt");

const create_new_user = async (req, res, next) => {
  const { email, password, role } = req.body;

  try {
    //check if user email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "A user with this email is already registered.",
      });
    }
    //check how many users are admins
    const adminNr = await User.find({ role: "admin" }).count();

    if (role === "admin" && adminNr >= 10)
      return res
        .status(400)
        .json({ message: "Unauthorized: You can only create a user profile." });

    //we create the admin only two times
    if (adminNr < 10 && role === "admin") {
      const newUser = new User({
        email,
        role,
        password: await bcrypt.hash(password, 10),
      });

      await newUser.save();

      const token = newUser.createToken();
      return res
        .set("x-admin-authorization-token", token)
        .json({ _id: newUser._id, email: newUser.email });
    } else if (role === "user") {
      const newUser = new User({
        email,
        role,
        password: await bcrypt.hash(password, 10),
      });

      await newUser.save();

      const token = newUser.createToken();

      return res
        .set("x-user-authorization-token", token)
        .json({ _id: newUser._id, email: newUser.email });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { create_new_user };
