import ACTION_TYPES from "../../actions/actiontsTypes";

const initialState = {
    isOpen: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.AFFILIATE_DASHBOARD_MENU_CLOSE_OPEN_ACTION: {
            return {
                isOpen: action.isOpen,
            }
        }

        default: {
            return state;
        }
    }
}
