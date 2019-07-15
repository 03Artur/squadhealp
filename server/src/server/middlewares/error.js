import {ApplicationError} from '../errors'
export default (err, req, res, next) => {
    if(err instanceof ApplicationError){
        res.status(err.status).send(err.message);
    }else{
        res.status(500).send("Internal server error! my bad.");
    }
}