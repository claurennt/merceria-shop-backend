const express = require('express');
const usersRouter = express.Router();

const isAdmin = require('../middlewares/authorizeAdmin');
const {
  create_new_user,
} = require('../controllers/users_controllers/create_new_user');
const list_all_users = require('../controllers/users_controllers/list_all_users');
//routes
usersRouter.route('/register').post(create_new_user);

usersRouter.route('/').get(isAdmin,list_all_users)

module.exports = usersRouter;
