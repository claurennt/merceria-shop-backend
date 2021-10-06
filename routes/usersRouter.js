const express = require('express');
const usersRouter = express.Router();

const {
  create_new_user,
} = require('../controllers/users_controllers/create_new_user');

//routes
usersRouter.route('/register').post(create_new_user);

module.exports = usersRouter;
