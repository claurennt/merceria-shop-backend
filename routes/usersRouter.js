const express = require("express");
const usersRouter = express.Router();

const checkAdminToken = require("../middlewares/authorizeAdmin");
const checkUserToken = require("../middlewares/authorizeUser");
const authenticate_user = require("../controllers/users_controllers/authenticate_user");
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

usersRouter.route("/login").post(authenticate_user);

usersRouter
  .route("/")
  .get(checkAdminToken, list_all_users)
  .delete(checkAdminToken, delete_users);

usersRouter.route("/:id").patch(checkUserToken, update_field_of_user);

module.exports = usersRouter;
