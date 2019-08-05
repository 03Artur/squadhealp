import ACTION_TYPES from '../actiontsTypes';

export const contestPaymentActionCreator = (contestId, creditCard) => {
    return {
        type: ACTION_TYPES.CONTEST_PAYMENT_ACTION,
         contestId,
        creditCard,
    }
};








