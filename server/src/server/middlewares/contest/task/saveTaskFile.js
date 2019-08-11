const multer = require('multer');
import {} from '../../../../../public/'
const upload = multer({
    dest: '../'
});

export default function saveTaskFile(req, res, next) {
    try {


    } catch (e) {
        next(e);
    }

}