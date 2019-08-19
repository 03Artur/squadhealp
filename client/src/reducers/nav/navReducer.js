import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';

const initialState = {

    dashboard: [],
    home: [],
    useItem: [],
};







export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_ADMIN_NAVIGATION: {
            return {
                dashboard: [],
                home: [],
                useItem: [],
            }
        }
        case ACTION_TYPES.GET_BUYER_NAVIGATION: {
            return {
                dashboard: [],
                home: [],

            }
        }
        default: {
            return initialState;
        }

    }
}


