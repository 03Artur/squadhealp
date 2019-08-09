import React from 'react';
import {connect} from 'react-redux';

import {reduxForm, Field, submit, change} from 'redux-form';


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
                         await dispatch(change("testForm", 'test', ['Hello', 'From', 'Div']));
                         await dispatch(submit("testForm"));
                     }
                 }>{"hello"}</div>
            <div style={
                style
            }
                 onClick={
                     async () => {
                         await dispatch(change("testForm", 'test', ['YUPI KAY EAY']));
                         await dispatch(submit("testForm"));
                     }
                 }>{"hello"}
            </div>
        </form>
    );
};


export default connect()(reduxForm({
    form: "testForm",

})(TestForm))

