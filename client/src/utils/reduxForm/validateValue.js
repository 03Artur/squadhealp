import REGEXP from '../regExps'


export const isRequired = (value) => (!value ? 'required value' : undefined);
export const notEmpty = (value) => {
    if(value){
        return /(?=.*?\S)/.test(value)?undefined:"value cannot be empty";
    }
};
export const maxLength = (maxLength) => value => {
    if (value) {
        const pattern = new RegExp(`^.{0,${maxLength}}$`);
        return (pattern.test(value)) ? undefined : `value can't be longer than ${maxLength} characters`
    }
};


export const oneOf = (values) => (value) => {

    return values.includes(value) ? undefined : "value does not meet the requirement"
};


export const creditCardNumber = (value) => {
    return REGEXP.CREDIT_CARD_NUMBER.test(value)?undefined:'invalid credit card number';
};

export const creditCardExpiry = (value) => {
    return REGEXP.CREDIT_CARD_EXPIRY.test(value)?undefined:'invalid credit card expiry';
};

export const creditCardCVC = (value) => {
    return REGEXP.CREDIT_CARD_CVC.test(value)?undefined:'invalid credit card cvc';
};

export const emailValidation = value => (
    REGEXP.EMAIL.test(value) ? undefined : 'Email is not valid format'
);

export const nameValidation = value => (

    REGEXP.NAME.test(value) ? undefined : 'Name is not valid format'
);

export const notEmptyStringValidation = value => (
    value && value.length > 0 ? undefined : "Field cannot be empty"
);

export const passwordValidation = value => (
    REGEXP.PASSWORD.test(value) ? undefined : 'Your password must be at least 8 characters, and include at least one lowercase letter, one uppercase letter, and a number.'
);

export const confirmPasswordValidation = (value, allValues) => {
    return allValues.password && value === allValues.password ? undefined : "Password does not match";
};


