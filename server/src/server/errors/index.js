const ForbiddenError = require('./ForbiddenError');
const NotFoundError = require('./NotFoundError');
const UnauthorizedError = require('./UnauthorizedError');
const BadRequestError = require('./BadRequestError');
const ApplicationError = require('./ApplicationError');
const AuthenticationTimeoutError = require('./AuthenticationTimeoutError');

module.exports = {
    ForbiddenError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
    ApplicationError,
    AuthenticationTimeoutError,
};