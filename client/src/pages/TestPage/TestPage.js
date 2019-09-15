import React, {Component} from "react";
import queryString from 'query-string';
import ContestForm from "../../components/forms/createContestForms/ContestForm/ContestForm";
import TestForm from '../../components/forms/_TestForm/_TestForm';
import {FORM_NAMES} from "../../constants";

export default class Test extends Component {

    constructor(props) {
        super(props);


    }

    onChange = (values) => {



    };


    submit(values) {

        console.log(values);

    };

    render() {
        return (
            <React.Fragment>
                <h1>Test Page</h1>
                <TestForm  form={FORM_NAMES.TEST_FORM} onSubmit={this.submit}/>
            </React.Fragment>
        )
    }

};
