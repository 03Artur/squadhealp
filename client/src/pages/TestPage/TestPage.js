import React, {Component} from "react";
import queryString from 'query-string';
import ContestForm from "../../components/forms/ContestForm/ContestForm";


export default class Test extends Component {

    constructor(props) {
        super(props);


    }




    submit = vakues => console.log(vakues);
    render() {
        return <ContestForm onSubmit={this.submit}/>
    }

};
