import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";

const initialState = {
  isOpen: false,
};

function chatMenuReducer(state = initialState, action) {
    switch (action.type) {

        case CHAT_ACTION_TYPES.CLOSE_OPEN_CHAT_MENU_ACTION:{
            return {
                isOpen: action.isOpen,
            }
        }

        default:{
            return state;
        }
    }
}

export default chatMenuReducer;
