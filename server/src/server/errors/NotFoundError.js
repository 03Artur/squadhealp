const ApplicationError = require('./ApplicationError');


class NotFoundError extends ApplicationError{
    constructor(message) {
        super(message || 'The server has not found anything matching the Request-URI.', 404);
    }
}

module.exports = NotFoundError;