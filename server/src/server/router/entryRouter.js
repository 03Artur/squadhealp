import express from 'express';
import path from 'path'
import multer from 'multer';
import moment from 'moment';
import {MULTER_TIME_FORMAT} from '../constants';
import * as entryMW from '../middlewares/entry'
import {getTaskEntries, postEntry, rejectEntry, updateEntry} from "../controllers/entryController";
import {namingFile} from "../middlewares/multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/entryFiles/'))
    },
    filename: namingFile
});
const upload = multer({storage: storage});

const router = express.Router();

router.post('/task/:taskId/entry',upload.array('files', 8),(req, res, next) => {
    try{
        req.body = JSON.parse(req.body.entry);
        req.body.files = req.files.map(item => item.filename);
        next();

    } catch (e) {
        next(e);
    }


}, entryMW.checkCRUDPermission,postEntry);
router.get('/task/:taskId/entry', entryMW.checkCRUDPermission,getTaskEntries);
router.put('/entry/:id', entryMW.findEntryByPk, entryMW.checkCRUDPermission, updateEntry);
router.put('/contest/:contestId/task/:taskId/reject/:id', entryMW.checkRejectPermission,rejectEntry);
router.post('/task/:taskId/entry/:id', );



export default router;