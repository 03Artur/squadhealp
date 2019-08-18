
import {REGEXP} from '../regexp';
const yup = require('yup');

export default  yup.object({
    number: yup.string().matches(REGEXP.CREDIT_CARD.NUMBER, { excludeEmptyString: true }).required(),
    expiry: yup.string().matches(REGEXP.CREDIT_CARD.EXPIRY, { excludeEmptyString: true }).required(),
    cvc: yup.string().matches(REGEXP.CREDIT_CARD.CVC, { excludeEmptyString: true }).required(),

});




