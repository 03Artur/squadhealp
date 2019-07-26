import {ApplicationError} from '../errors'
export default (err, req, res, next) => {
    if(err.isCustomError/* err instanceof ApplicationError*/){
        res.status(err.status).send(err.message);
    }else{
        res.status(500).send("Something went wrong on server!");
    }
}