import multer from 'multer';
import path from 'path';
import moment from 'moment';
import {IMAGES_EXTENSIONS, MULTER_TIME_FORMAT} from "../../constants";

const upload = multer({});

export function saveTaskFile(req, res, next) {
    try {
        res.send({
            __dirname: __dirname,

        })
    } catch (e) {
        next(e);
    }
}

export function filterOnlyImages(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, IMAGES_EXTENSIONS.includes(ext));
}

export function namingFile(req, file, cb) {
    const {originalname} = file;
    cb(null, `${moment().format(MULTER_TIME_FORMAT)}_${originalname}`);

}
