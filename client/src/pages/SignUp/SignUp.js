import React from 'react';
import DocumentTitle from 'react-document-title';
import SignUpForm from '../../components/form/SingUpForm/SignUpForm';
import {singUpActionCreator} from '../../actions/authorizationActionCreators';
import {connect} from 'react-redux';


function SignUp(props) {

    const submit = values => {
        // print the form values to the console
        console.log(values)
        props.signupAction(values)
    };

    const logIt = () => {
        console.group('SignUp');
        console.log(props);
        console.groupEnd();
    };

    return (
        <div>
            <DocumentTitle title='Sign Up'/>
            <h1>Sign Up Page</h1>

            <SignUpForm onSubmit={submit} />
            <br/>
            <br/>
            <br/>
            <div>{
                logIt()
            }</div>
        </div>
    );

}

const mapStateToProps = state => {
    const {user, isFetching, error} = state.authorizationReducer;
    return {user, isFetching, error};
};



const mapDispatchToProps = (dispatch) => ({

    signupAction: (data) => dispatch(singUpActionCreator(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);