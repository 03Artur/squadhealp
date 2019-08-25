import multer from 'multer';
import path from 'path';
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



