const {StatusCodes} = require("http-status-codes");

const notFoundMiddleware = (req, res) => {
    res.status(StatusCodes.NOTFOUND).json({message: "Route does not exist"});
}

module.exports = notFoundMiddleware;
