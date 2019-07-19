import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
                <div onClick={handleSubmit}>Button</div>
            </div>

    );

};

LoginForm.propTypes ={
    handleSubmit: PropTypes.func,

};
LoginForm.defaultProps ={
    handleSubmit:function () {
    },

};




const createReduxForm = reduxForm({form: 'login'});

LoginForm = createReduxForm(LoginForm);


export default LoginForm;