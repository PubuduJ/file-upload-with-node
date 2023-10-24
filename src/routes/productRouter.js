const express = require("express");
const router = express.Router();
const {createProduct, getAllProducts, uploadProductImage} = require("../controllers/productController");

router.route("/").post(createProduct).get(getAllProducts);
router.route("/upload").post(uploadProductImage);

module.exports = router;