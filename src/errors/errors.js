const {StatusCodes} = require("http-status-codes");

class BadRequestError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

class ConflictError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.CONFLICT
  }
}

module.exports = {BadRequestError, ConflictError};
