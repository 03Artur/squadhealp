"use strict";

const fs = require('fs'),
    path = require('path'),
    mongoose = require('mongoose'),
    basename = path.basename(__filename),
    env = process.env.NODE_ENV || 'development',
    configPath = env === 'production' ? path.join(__dirname, '..', '..', '..', 'src/server/config/config.json') : path.join(__dirname, '..', 'config/config.json'),
    config = require(configPath)[env],
    db = {};

mongoose.connect(config.mongoDbUrl, {useNewUrlParser: true}, error => {
    if (error) {
        process.exit(1);
    } else {
        console.log("Chat DB connection success");
    }
});

fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file));
        db[model.modelName] = model
    });


mongoose.set('debug', true);

db.mongoose = mongoose;

module.exports = db;


