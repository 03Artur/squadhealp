import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';


const chats = [
    {
        room: 'test',
        members: [

            {
                id: 1,
                firstName: "Name",
                lastName: "Surname",
                profilePicture: null,
            },
        ],
        messages: [
            {
                authorId: 1,
                value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                timestamp: '15:17',
            },
            {
                authorId: 1,
                value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                timestamp: '15:17',
            },
            {
                authorId: 1,
                value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                timestamp: '15:17',
            },
            {
                authorId: 1,
                value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                timestamp: '15:17',
            },
            {
                authorId: 1,
                value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                timestamp: '15:17',
            },
        ]
    },

];


const initialState = {
    chats: chats,
    isFetching: false,
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {
        case CHAT_ACTION_TYPES.GET_USER_CHATS_REQUEST: {

            return _.cloneDeep({
                ...state,
                isFetching: true,
            });
        }
        case CHAT_ACTION_TYPES.GET_USER_CHATS_RESPONSE: {
            return _.cloneDeep({
                ...state,
                chats: action.chats,
            });
        }
        case CHAT_ACTION_TYPES.GET_USER_CHATS_ERROR: {
            return _.cloneDeep({
                ...state,
                error: action.error
            })
        }

        default: {
            return state;
        }

    }

}

