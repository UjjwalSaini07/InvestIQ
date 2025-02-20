const APIError = require('../utlis/ApiError')

const versionHandler = (version) => (req, res, next) => {
    if(req.path.startsWith(`/api/${version}`)) {
        next()
    } else {
        throw new APIError('Invalid API Version', 404);
    }
}

module.exports = versionHandler;