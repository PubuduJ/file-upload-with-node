const {StatusCodes} = require("http-status-codes");
const {db} = require("../models");

const Product = db.products;
const sequelize = db.sequelize;

const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    return res.status(StatusCodes.CREATED).json(product);
}

const getAllProducts = async (req, res) => {
    res.send("list of products");
}

const uploadProductImage = async (req, res) => {
    console.log(req);
    res.send("upload product image");
}

module.exports = {createProduct, getAllProducts, uploadProductImage};