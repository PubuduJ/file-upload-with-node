const {StatusCodes} = require("http-status-codes");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const {db} = require("../models");
const {BadRequestError, ConflictError} = require("../errors/errors");

const Product = db.products;
const sequelize = db.sequelize;

const createProduct = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const availability = await Product.findOne({where: {name: req.body.name}});
        if (!availability) {
            const product = await Product.create(req.body);
            await t.commit();
            return res.status(StatusCodes.CREATED).json(product);
        }
        throw new ConflictError("Product already exist in the database");
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

const getAllProducts = async (req, res) => {
    const allProducts = await Product.findAll();
    return res.status(StatusCodes.OK).json(allProducts);
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