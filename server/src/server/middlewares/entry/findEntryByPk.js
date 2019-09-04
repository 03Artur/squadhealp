import {Entries} from '../../models';
import * as appError from "../../errors";

export default async function findEntryByPk(req, res, next) {
    try {
        const {params: id} = req;
        const entry = await Entries.findByPk(id);
        if(entry){
            req.entry = entry;
            return next();
        }
        return next(new appError.NotFoundError())


    }catch (e) {
        next(e)
    }


}



