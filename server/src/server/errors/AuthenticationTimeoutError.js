const ApplicationError = require('./ApplicationError');


class AuthenticationTimeoutError extends ApplicationError{
    constructor(message) {
        super(message || 'The token is outdated or has proven to be incorrect.', 419);
    }
}

module.exports = AuthenticationTimeoutError;