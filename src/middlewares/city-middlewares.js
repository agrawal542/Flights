const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/comman");
const AppError = require("../utils/errors/app-error");

function validCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = "Something went wrong while creating city.";
        ErrorResponse.error = new AppError(["City name not found in the incoming request in the correct form."], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports = { validCreateRequest }