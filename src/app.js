const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");
const {db} = require("./models");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");
const products = require("./routes/productRouter");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/products", products);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = Number(process.env.PORT);

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log("Database connection successful");
        // start the Express server
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}....`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

startServer().then(() => {});