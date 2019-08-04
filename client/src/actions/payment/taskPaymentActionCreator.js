import ACTION_TYPES from '../actiontsTypes';

export const taskPaymentActionCreator = (taskId, creditCard) => {
    return {
        type: ACTION_TYPES.TASK_PAYMENT_ACTION,
        taskId,
        creditCard,
    }
};








