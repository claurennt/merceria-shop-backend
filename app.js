require("dotenv").config();
require("./db/Clients");
const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorHandler");

// routes
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(
  cors({
    exposedHeaders:
      "x-admin-authorization-token" && "x-user-authorization-token",
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

//use this middleware to serve static files when the route is prefixed with /public
app.use("/public/images/", express.static(__dirname + "/public/images"));

app.use("/", indexRouter);
app.use("/prodotti", productsRouter);
app.use("/users", usersRouter);
app.use(errorHandler);

module.exports = app;
