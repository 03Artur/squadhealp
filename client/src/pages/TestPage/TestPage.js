import React, {Component} from "react";
import queryString from 'query-string';
import ContestForm from "../../components/forms/createContestForms/ContestForm/ContestForm";
import TestForm from '../../components/forms/_TestForm/_TestForm';

export default class Test extends Component {

    constructor(props) {
        super(props);


    }

    onChange = (values) => {



    };


    submit(values) {



    };

    render() {
        return (
            <React.Fragment>
                <h1>Test Page</h1>
                <TestForm onSubmit={this.submit}/>
            </React.Fragment>
        )
    }

};
