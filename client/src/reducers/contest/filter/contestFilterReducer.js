import ACTION_TYPES from "../../../actions/actiontsTypes";
import CONTEST_ACTION_TYPES from "../../../actions/actionTypes/contestActionTypes";
import _ from 'lodash';
import {FILTER_TYPE, NAME_TYPES, TASK_TYPES} from '../../../constants'
import {ROLES} from "../../../constants";
import queryString from 'query-string';
import history from "../../../history";
import {emailValidation} from "../../../utils/reduxForm/validateValue";

const initialState = {
        filterValues: [
            {
                title: 'Contest type',
                type: FILTER_TYPE.CHECKBOX,
                values: _.values(TASK_TYPES).map(type => (
                    {
                        title: type,

                        checked: false,
                        value: {
                            type: type,
                        }
                    }
                ))
            },
            {
                title: 'By Award Amount',
                type: FILTER_TYPE.RADIO,
                values: [
                    {
                        title: '$1 - $99',
                        name: 'cost',
                        value: {
                            cost: ["1", "99"]
                        }
                    },
                    {
                        title: '$100 - $199',
                        name: 'cost',

                        value: {
                            cost: ["100", "199"]
                        }
                    },
                    {
                        title: '$200 - $300',
                        name: 'cost',

                        value: {
                            cost: ["200", "300"]
                        }
                    },
                    {
                        title: '> $300',
                        name: 'cost',
                        value: {
                            cost: ["300", "4000"]
                        }
                    },

                ]
            },],
        selectedValues: new Map(),
        filter: queryString.parse(history.location.search),
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
                filterValues: _.cloneDeep(state.filterValues),
                filter: {},
                selectedValues: new Map(),
            }
        }

        default:
            return state;
    }


}


class Filter {
    /**
     *
     * @param {Array.<FilterProp>} props
     */
    constructor(props) {
        this.props = props;
    }

}

class FilterProp {
    /**
     *
     * @param {string} title
     * @param {Array.<FilterValue>} values
     * @param {FILTER_TYPE} type
     */
    constructor(title, values, type = FILTER_TYPE.RADIO) {
        this.title = title;
        this.values = values;
        this.type = type;
    }

}

class FilterValue {
    /**
     *
     * @param {string} title
     * @param {Object} value
     * @param {boolean} checked
     */
    constructor(title, value, checked = false) {
        this.title = title;
        this.value = value;
    }

   /* isChecked(filter) {
        return _.isEqual(_.pick(filter, _.keys(this.value)), this.value)
    }
*/
}




