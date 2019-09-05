import {ApplicationError} from '../errors'
const Sequelize = require('sequelize');

export default (err, req, res, next) => {
    res.send(err)
    if( err instanceof ApplicationError){
        res.status(err.status).send(err.message);
    }
    else if(err instanceof Sequelize.UniqueConstraintError){
        res.status(400).send(`${err.original.detail}`)
    }
    else{
        res.status(400).send('Bad request.');
    }

}