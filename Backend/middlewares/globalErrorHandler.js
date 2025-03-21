const APIError = require("../utlis/ApiError");

const globalErrorHandler = (err, req, res, next) => {
    console.log(err.stack);

    if (err instanceof APIError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    } else if (err.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: `Validation Error : ${err.message}`,
        });
    } else {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error : ${err.message}`,
        });
    }
};

module.exports = globalErrorHandler;