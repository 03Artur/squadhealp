export const normalizeCardNumber = value => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    let i = 4;
    let result = onlyNums;
    while (i < result.length) {
        result = `${result.slice(0, i)} ${result.slice(i)}`;
        i += 5;
    }
    return result;
};
export const normalizeExpiry = value => {
    if (!value) {
        return value;
    }
    if (value.length === 1 && value[0] > 1) {
        value = `0` + value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length > 2) {
        return `${onlyNums.slice(0, 2)} / ${onlyNums.slice(2)}`;
    }
    return onlyNums;
};
export const normalizeCVC = value => {
    return value.replace(/[^\d]/g, '');
};