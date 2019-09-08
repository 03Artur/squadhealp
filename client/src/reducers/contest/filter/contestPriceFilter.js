import {TASK_TYPE} from "../../../constants";
import _ from 'lodash';

const filter = [
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
        values: _.keys(TASK_TYPE).map(type => (
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
    },]


const initialState = {
    values: []

};


export default function contestPriceReducer(state = initialState, action) {

    switch (action.type) {

    }

}
