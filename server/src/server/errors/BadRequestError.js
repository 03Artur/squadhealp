const ApplicationError = require('./ApplicationError');


class BadRequestError extends ApplicationError{
    constructor(message) {
        super(message || 'The server cannot or will not process the request due to an apparent client error.', 400);
    }
}

module.exports = BadRequestError;