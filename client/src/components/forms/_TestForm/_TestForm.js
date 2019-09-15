import React from 'react';
import {connect} from 'react-redux';

import {reduxForm, Field, submit, change} from 'redux-form';
import {FORM_NAMES} from "../../../constants";


let CustomRadioInput = ({input, meta, ...props}) => {


    return (
        <label>
            <h3>Radio input</h3>
            <input type='radio' {...input}/>
        </label>
    )
};

const style = {
    height: "100px",
    width: "200px",
    backgroundColor: 'black',
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "UPPERCASE",
    margin: "20px",
};

const Input = ({input,meta, ...props}) => {

    return <input type={'checkbox'} {...input} />
}

let TestForm = ({handleSubmit, dispatch, ...props}) => {


    return (
        <form onSubmit={handleSubmit}>
            <Field type="select-multi" name="test" component={Input} value={{test:'test'}}/>
            <Field type="select-multi" name="test" component={Input} value={"asdasd"}/>
            <button type={'submit'}>test</button>
        </form>
    );
};


export default connect()(
    reduxForm({
        form: FORM_NAMES.TEST_FORM,
})(TestForm))

