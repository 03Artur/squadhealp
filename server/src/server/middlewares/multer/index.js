import multer from 'multer';
import path from 'path';
import {MULTER_TIME_FORMAT} from "../../constants";
const upload = multer({});

export function saveTaskFile(req, res, next) {
    try{
        res.send({
            __dirname: __dirname,

        })
    }
    catch (e) {
        next(e);
    }
}

export function namingFile(req, file, cb) {
    const {originalname} = file;
    cb(null, `${moment().format(MULTER_TIME_FORMAT)}_${originalname}`);

}
