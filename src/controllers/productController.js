const {StatusCodes} = require("http-status-codes");
const {db} = require("../models");

const Product = db.products;
const sequelize = db.sequelize;

const createProduct = async (req, res) => {
    res.send("create product");
}

const getAllProducts = async (req, res) => {
    res.send("list of products");
}

const uploadProductImage = async (req, res) => {
    res.send("upload product image");
}

module.exports = {createProduct, getAllProducts, uploadProductImage};