const {StatusCodes} = require("http-status-codes");
const path = require("path");
const {db} = require("../models");
const {BadRequestError} = require("../errors/errors");

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
    // Check if file exists.
    if (!req.files) {
        throw new BadRequestError("No file uploaded");
    }
    const productImage = req.files.image;
    // Check the format.
    if (!productImage.mimetype.startsWith("image")) {
        throw new BadRequestError("Please upload an image");
    }
    // Check the size of the image.
    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        throw new BadRequestError("Please upload an image smaller than 1MB");
    }
    const imagePath = path.join(__dirname, "../uploads/"+`${productImage.name}`);

    // move image to uploads directory.
    await productImage.mv(imagePath);
    res.status(StatusCodes.OK).json({image: "Succes"});
}

module.exports = {createProduct, getAllProducts, uploadProductImage};