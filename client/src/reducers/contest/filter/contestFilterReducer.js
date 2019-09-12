import ACTION_TYPES from "../../../actions/actiontsTypes";
import CONTEST_ACTION_TYPES from "../../../actions/actionTypes/contestActionTypes";
import _ from 'lodash';
import {NAME_TYPES, TASK_TYPES} from '../../../constants'
import {ROLES} from "../../../constants";

import queryString from 'query-string';
import history from "../../../history";

const initialState = {
        filterValues: [
            {
                title: 'By status',
                values: [
                    {
                        title: 'Active',
                        value: {winnerId: null, isPaid: true,}
                    },
                    {
                        title: 'Closed',
                        value: {winnerId: 'not null', isPaid: true,}
                    },
                ]
            },
            {
                title: 'Contest type',
                values: _.values(TASK_TYPES).map(type => (
                    {
                        title: type,
                        value: {
                            type: type,
                        }
                    }
                ))
            },
            {
                title: 'By Award Amount',
                values: [
                    {
                        title: '$100 - $199',
                        value: {
                            cost: ["100", "199"]
                        }
                    },
                    {
                        title: '$200 - $300',
                        value: {
                            cost: ["200", "300"]
                        }
                    },
                    {
                        title: '> $300',
                        value: {
                            cost: ["300", "4000"]
                        }
                    },

                ]
            },],
        selectedValues: new Map(),
        filter:  queryString.parse(history.location.search),
    }
;


export default function contestFilterReducer(state = initialState, action) {

    switch (action.type) {

        case CONTEST_ACTION_TYPES.ADD_FILTER_PROPS: {

            const {key, param} = action;
            const clonedState = _.cloneDeep(state);
            const {selectedValues} = clonedState;
            selectedValues.set(key, param);

            return {
                ...clonedState,
                filter: {
                    ...clonedState.filter,
                    ...param.value,
                }
            };
        }

        case CONTEST_ACTION_TYPES.REMOVE_FILTER_PROPS: {

            const clonedState = _.cloneDeep(state);
            const {selectedValues, filter} = clonedState;
            const {key} = action;
            const {value} = selectedValues.get(key);
            selectedValues.delete(key);

            return {
                ...clonedState,
                filter: _.omit(filter, _.keys(value))
            }
        }
        case CONTEST_ACTION_TYPES.RESET_FILTER_ACTION: {

            return {
                filterValues:_.cloneDeep(state.filterValues),
                filter: {},
                selectedValues: new Map(),
            }
        }

        default:
            return state;
    }


}



