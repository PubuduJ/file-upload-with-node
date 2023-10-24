const express = require("express");
const router = express.Router();
const {uploadProductImage} = require("../controllers/uploadController");

router.route("/").post(uploadProductImage);

module.exports = router;