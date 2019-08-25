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

let TestForm = ({handleSubmit, dispatch, ...props}) => {


    return (
        <form onSubmit={handleSubmit}>
            <div style={
                style
            }
                 onClick={
                     async () => {
                         await dispatch(change(FORM_NAMES.TEST_FORM, 'test', ['Hello', 'From', 'Div']));
                         await dispatch(submit(FORM_NAMES.TEST_FORM));
                     }
                 }>{"hello"}</div>
            <div style={
                style
            }
                 onClick={
                     async () => {
                         await dispatch(change(FORM_NAMES.TEST_FORM, 'test', ['YUPI KAY EAY']));
                         await dispatch(submit(FORM_NAMES.TEST_FORM));
                     }
                 }>{"hello"}
            </div>
        </form>
    );
};


export default connect()(reduxForm({
    form: FORM_NAMES.TEST_FORM,

})(TestForm))

