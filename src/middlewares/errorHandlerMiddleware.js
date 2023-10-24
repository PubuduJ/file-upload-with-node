const {StatusCodes} = require("http-status-codes");
const {BadRequestError} = require("../errors/errors");

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof BadRequestError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
}

module.exports = errorHandlerMiddleware;
