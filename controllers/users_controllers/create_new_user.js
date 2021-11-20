/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');

const User = require('../../db/models/UsersModel');

const create_new_user = async (req, res, next) => {
  const { email, password, role } = req.body;

  try {
    // check if user email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: 'A user with this email is already registered.',
      });
    }
    // check how many users are admins
    const adminNr = await User.find({ role: 'admin' }).count();

    if (role === 'admin' && adminNr > 1)
      return res
        .status(401)
        .json({ message: 'Unauthorized: You can only create a user profile.' });

    // we create the admin only two times
    if (role === 'admin' && adminNr < 1) {
      const newUser = new User({
        email: req.body.email,
        role,
        password: await bcrypt.hash(password, 10),
      });

      await newUser.save();

      const { _id, email } = newUser;

      const token = newUser.createToken();

      return res.set('x-admin-authorization-token', token).json({ _id, email });
    } else if (role === 'user') {
      const newUser = new User({
        email: req.body.email,
        role,
        password: await bcrypt.hash(password, 10),
      });

      await newUser.save();

      const { _id, email } = newUser;

      const token = newUser.createToken();

      return res.set('x-user-authorization-token', token).json({ _id, email });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { create_new_user };
