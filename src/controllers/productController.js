const {StatusCodes} = require("http-status-codes");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
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
    // Check the size of the image ( < 1MB).
    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        throw new BadRequestError("Please upload an image smaller than 1MB");
    }
    // upload the image to cloudinary and get the secure url.
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: "file-upload"
    })
    // once upload file to the cloudinary, remove the file from tmp directory.
    fs.unlinkSync(req.files.image.tempFilePath);
    return res.status(StatusCodes.OK).json({imageURL: result.secure_url});
}

module.exports = {createProduct, getAllProducts, uploadProductImage};