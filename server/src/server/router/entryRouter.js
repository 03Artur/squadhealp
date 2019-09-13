import express from 'express';
import path from 'path'
import multer from 'multer';
import moment from 'moment';
import {MULTER_TIME_FORMAT} from '../constants';
import * as entryMW from '../middlewares/entry'
import {getEntries, postEntry, rejectEntry, setWinner, updateEntry} from "../controllers/entryController";
import {filterOnlyImages, namingFile} from "../middlewares/multer";
import {getSelectProps} from "../middlewares/entry/filterEntry";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/images/entryFiles/'))
    },
    filename: namingFile
});
const upload = multer({
    storage: storage,
    fileFilter: filterOnlyImages,
});
const router = express.Router();

router.post('/task/:taskId/entry', upload.array('files', 8), (req, res, next) => {
        try {
            req.body = JSON.parse(req.body.entry);
            req.body.files = req.files.map(item => item.filename);
            next();
        } catch (e) {
            next(e);
        }
    },
    entryMW.checkCRUDPermission, postEntry);



router.get('/entries', entryMW.checkCRUDPermission,getSelectProps, getEntries);
router.put('/entry/:id', entryMW.findEntryByPk, entryMW.checkCRUDPermission, updateEntry);
router.put('/entry/:id/reject', entryMW.checkGrandOrRejectPermission, rejectEntry);

router.post('/entry/:id/win',entryMW.checkGrandOrRejectPermission, setWinner);


export default router;