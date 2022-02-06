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
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};

// routes

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
app.get("/", (req, res) => res.redirect("api"));
app.get("/favicon.ico", (req, res) => res.status(204).send("no content"));
app.use("/api", swaggerUi.serve);
app.get("/api", swaggerUi.setup(swaggerDocument, options));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

//use this middleware to serve static files when the route is prefixed with /public
app.use("/public/images/", express.static(__dirname + "/public/images"));

app.use("/prodotti", productsRouter);
app.use("/users", usersRouter);
app.use(errorHandler);

module.exports = app;
