import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';
const initialState = {
    query: null,
};


export default function createContestQueryReducer(state = initialState,action){
    switch (action.type) {
        case ACTION_TYPES.CREATE_CONTEST_ADD_PARAM_TO_QUERY_OBJECT:
            return {
               query: {
                   ...(_.cloneDeep(state.query)),
                   ...(action.query),
               },
            };
        case ACTION_TYPES.CREATE_CONTEST_SET_QUERY_OBJECT:
            console.log(action.query);
            return {
                query: action.query,
            };
        case ACTION_TYPES.CREATE_CONTEST_REMOVE_QUERY_OBJECT:
            return {
                query: null,
            };
        default:
            return state;

    }



}



