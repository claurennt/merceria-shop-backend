// here we create our schema and the  compile our schema into a model
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

// the schema is the blueprint of our  model
const usersSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'] },
});

usersSchema.methods.createToken = () => {
  /* payload= the part of the JWT where all the user data is actually added. 
   This data is also referred to as the 'claims' of the JWT.
   This information is readable by anyone so it is always advised 
   to not put any confidential information in here.*/
  const payload = { _id: this._id, email: this.email };

  //retrieve the secret key for the signing
  const { JWT_SECRET_KEY } = process.env;

  //signing a jwt with the data from the payload plus the jwt secret key
  const token = jwt.sign(payload, JWT_SECRET_KEY);

  return token;
};
//create the model out of the imported schema
const User = mongoose.model('User', usersSchema);

module.exports = User;
