const {StatusCodes} = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err.errors[0].message) return res.status(StatusCodes.BAD_REQUEST).json({ message: err.errors[0].message });
  else {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
}

module.exports = errorHandlerMiddleware;
