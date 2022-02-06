const express = require("express");
const router = express.Router();
const {
  save_purchase,
} = require("../controllers/users_controllers/save_purchase");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// router.use("/api-docs", swaggerUi.serve);
// router.get("/api-docs", swaggerUi.setup(swaggerDocument));
// /* GET home page. */
router.get("/", (req, res, next) => {
  res.sendFile("indexs");
});

router.route("/purchase/confirm").post(save_purchase);
module.exports = router;
