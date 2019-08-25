module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Banks', [
            {
                number: '0000111122223333',
                expiry: '12/99',
                cvc: '123',
            },
            {
                number: '1000111122223333',
                expiry: '12/99',
                cvc: '123',
            },
            {
                number: '2000111122223333',
                expiry: '12/99',
                cvc: '123',
            },
            {
                number: '3000111122223333',
                expiry: '12/99',
                cvc: '123',
            },
            {
                number: '4000111122223333',
                expiry: '12/99',
                cvc: '123',
            },


        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
