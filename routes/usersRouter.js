const express = require("express");
const usersRouter = express.Router();

const authorizeAdmin = require("../middlewares/authorizeAdmin");
const authorizeUser = require("../middlewares/authorizeUser");
const {
  create_new_user,
} = require("../controllers/users_controllers/create_new_user");
const list_all_users = require("../controllers/users_controllers/list_all_users");
const {
  delete_users,
} = require("../controllers/users_controllers/delete_users");
const {
  update_field_of_user,
} = require("../controllers/users_controllers/update_field_of_user");

//routes
usersRouter.route("/register").post(create_new_user);

usersRouter
  .route("/")
  .get(authorizeAdmin, list_all_users)
  .delete(authorizeAdmin, delete_users);

usersRouter.route("/:id").patch(authorizeUser, update_field_of_user);
module.exports = usersRouter;
