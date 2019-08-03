import REGEXP from '../regExps'

export const emailValidation = value => (
    REGEXP.EMAIL.test(value) ? undefined : 'Email is not valid format'
);

export const nameValidation = value => (

    REGEXP.NAME.test(value) ? undefined : 'Name is not valid format'
);

export const emptyValidation = value => (
    value ? undefined : "Field cannot be empty"
);

export const passwordValidation = value => (
    REGEXP.PASSWORD.test(value) ? undefined : 'Your password must be at least 8 characters, and include at least one lowercase letter, one uppercase letter, and a number.'
);

export const confirmPasswordValidation = (value, allValues) => {
    return allValues.password && value === allValues.password ? undefined : "Password does not match";
};


