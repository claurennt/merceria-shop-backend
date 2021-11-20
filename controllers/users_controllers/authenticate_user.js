/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const User = require('../../db/models/UsersModel');

const authenticate_user = async (req, res) => {
  const { email, password } = req.body;

  // allow selection of password field of user for bycrpyt comparison
  const user = await User.findOne({ email }).select('+password');

  if (!user)
    return res.status(400).send('A user with this email does not exist.');

  const isPasswordSame = await bcrypt.compare(password, user.password);

  if (!isPasswordSame) return res.status(400).send('Invalid credentials');

  const token = user.createToken();

  res.set('x-authorization-token', token).send('Login was successfull');
};

module.exports = authenticate_user;
