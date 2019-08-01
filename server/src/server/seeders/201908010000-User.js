'use strict'
const bcrypt = require('bcrypt');
const {ROLE} = require('../constants');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('User', [
            {
                firstName: 'Arthur',
                lastName: 'Chubukliev',
                email: 'arthur@gmail.com',
                password: bcrypt.hashSync('Artur1992', bcrypt.genSaltSync(10)),
                profilePicture: 'hades.jpg',
                role: ROLE.ADMIN,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email1@gmail.com',
                password: bcrypt.hashSync('passworD1', bcrypt.genSaltSync(10)),
                profilePicture: 'user1.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email2@gmail.com',
                password: bcrypt.hashSync('passworD1', bcrypt.genSaltSync(10)),
                profilePicture: 'user2.jpeg',
                role: ROLE.CREATIVE,
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email3@gmail.com',
                password: bcrypt.hashSync('passworD1', bcrypt.genSaltSync(10)),
                profilePicture: 'user3.jpeg',
                role: ROLE.BUYER,
                
                isBanned: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email4@gmail.com',
                password: bcrypt.hashSync('passworD4', bcrypt.genSaltSync(10)),
                profilePicture: 'user4.jpeg',
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email5@gmail.com',
                password: bcrypt.hashSync('passworD5', bcrypt.genSaltSync(10)),
                profilePicture: 'user5.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email6@gmail.com',
                password: bcrypt.hashSync('passworD6', bcrypt.genSaltSync(10)),
                profilePicture: 'user6.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email7@gmail.com',
                password: bcrypt.hashSync('passworD7', bcrypt.genSaltSync(10)),
                profilePicture: 'user7.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email8@gmail.com',
                password: bcrypt.hashSync('passworD8', bcrypt.genSaltSync(10)),
                profilePicture: 'user8.jpeg',
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email9@gmail.com',
                password: bcrypt.hashSync('passworD9', bcrypt.genSaltSync(10)),
                profilePicture: 'user9.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email10@gmail.com',
                password: bcrypt.hashSync('passworD10', bcrypt.genSaltSync(10)),
                profilePicture: 'user10.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email11@gmail.com',
                password: bcrypt.hashSync('passworD11', bcrypt.genSaltSync(10)),
                profilePicture: 'user11.jpeg',
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email122@gmail.com',
                password: bcrypt.hashSync('passworD122', bcrypt.genSaltSync(10)),
                profilePicture: 'user12.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email13@gmail.com',
                password: bcrypt.hashSync('passworD13', bcrypt.genSaltSync(10)),
                profilePicture: 'user13.jpeg',
                role: ROLE.BUYER,
                
                isBanned: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email14@gmail.com',
                password: bcrypt.hashSync('passworD14', bcrypt.genSaltSync(10)),
                profilePicture: 'user14.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email15@gmail.com',
                password: bcrypt.hashSync('passworD15', bcrypt.genSaltSync(10)),
                profilePicture: 'user15.jpeg',
                role: ROLE.CREATIVE,
                
                isBanned: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email16@gmail.com',
                password: bcrypt.hashSync('passworD16', bcrypt.genSaltSync(10)),
                profilePicture: 'user16.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email17@gmail.com',
                password: bcrypt.hashSync('passworD17', bcrypt.genSaltSync(10)),
                profilePicture: 'user17.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email1998@gmail.com',
                password: bcrypt.hashSync('passworD19', bcrypt.genSaltSync(10)),
                profilePicture: 'user19.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email20@gmail.com',
                password: bcrypt.hashSync('passworD20', bcrypt.genSaltSync(10)),
                profilePicture: 'user20.jpeg',
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email21@gmail.com',
                password: bcrypt.hashSync('passworD21', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email22@gmail.com',
                password: bcrypt.hashSync('passworD22', bcrypt.genSaltSync(10)),
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email23@gmail.com',
                password: bcrypt.hashSync('passworD23', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email24@gmail.com',
                password: bcrypt.hashSync('passworD24', bcrypt.genSaltSync(10)),
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email25@gmail.com',
                password: bcrypt.hashSync('passworD25', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email26@gmail.com',
                password: bcrypt.hashSync('passworD26', bcrypt.genSaltSync(10)),
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email27@gmail.com',
                password: bcrypt.hashSync('passworD27', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email28@gmail.com',
                password: bcrypt.hashSync('passworD28', bcrypt.genSaltSync(10)),
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email29@gmail.com',
                password: bcrypt.hashSync('passworD29', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email30@gmail.com',
                password: bcrypt.hashSync('passworD30', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email31@gmail.com',
                password: bcrypt.hashSync('passworD31', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email32@gmail.com',
                password: bcrypt.hashSync('passworD32', bcrypt.genSaltSync(10)),
                role: ROLE.CREATIVE,
                
                isBanned: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email33@gmail.com',
                password: bcrypt.hashSync('passworD33', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                firstName: 'Firstname',
                lastName: 'Lastname',
                email: 'email34@gmail.com',
                password: bcrypt.hashSync('passworD34', bcrypt.genSaltSync(10)),
                role: ROLE.BUYER,
                
                isBanned: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },


        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
