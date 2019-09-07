import ACTION_TYPES from "../../actions/actiontsTypes";
import CONTEST_ACTION_TYPES from "../../actions/actionTypes/contestActionTypes";
import _ from 'lodash';
import {NAME_TYPE, TASK_TYPE} from './.././../constants'
import {ROLE} from "./.././../constants";
import history from "../../history";
import queryString from 'query-string';


const parseSelectedProps = (value) => {
    const selected

};


const initialState = {
    filterProps: [
        {
            title: 'By status',
            values: [
                {
                    title: 'Active',
                    value:
                        {
                            winnerId: null,
                            isPaid: true,
                        }

                },
                {
                    title: 'Closed',
                    value: {
                        winnerId: 'notnull',
                    },
                },
            ],
        },
        {
            title: 'Contest type',
            values: Object.values(TASK_TYPE).map(item => (
                {
                    title: item, value: {type: item},
                }
            )),
        },
        {
            title: 'By Award Amount',
            values: [
                {
                    title: '$100 - $199',
                    value: {cost: ["100", "199"]}
                },
                {
                    title: '$200 - $300',
                    value: {cost: ["200", "199"]}
                },
                {
                    title: '> $300',
                    value: {cost: ["300", "4000"]}
                },
            ]
        },
    ],
    selectedProps: new Map(),
    filter: queryString.parse(history.location.search),
};


export default function contestFilterReducer(state = initialState, action) {

    switch (action.type) {

        case CONTEST_ACTION_TYPES.ADD_FILTER_PROPS: {
            const clonedState = _.cloneDeep(state);
            const {key, value} = state;
            clonedState.selectedProps = clonedState.set(key, value);
            return clonedState;
        }
        case CONTEST_ACTION_TYPES.REMOVE_FILTER_PROPS: {
            return _.cloneDeep({
                ...state,

            })
        }
        /*case CONTEST_ACTION_TYPES.SET_FILTER: {

        }*/

        default:
            return state;
    }


}



