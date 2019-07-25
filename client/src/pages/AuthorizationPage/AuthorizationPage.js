/*
* REACT
* */
import React from 'react';

/*
* REACT, REACT-REDUX
* */
import {connect} from 'react-redux';
import {changeModeToLoginActionCreator,changeModeToSignUpActionCreator} from "../../actions/authorizationActionCreators";

/*
* COMPONENTS
* */
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import AuthorizationForm from '../../components/Form/AuthorizationForm';

/*
* STYLES
* */
import styles from './AuthorizationPage.module.scss';

/*
* UTILS
* */
import {AUTHORIZATION_MODE, PATH, ROLE} from '../../constants';
import ACTION_TYPES from '../../actions/actiontsTypes';

class AuthorizationPage extends React.Component {

    constructor(props) {
        super(props);
        this.changeAuthorizationModeByLocation();
    }

    changeAuthorizationModeByLocation = () => {
        if (this.props.location.pathname === PATH.SIGN_UP && this.props.mode !== AUTHORIZATION_MODE.SIGN_UP_MODE) {
            this.props.changeModeToSignUpAction();
        } else if (this.props.location.pathname === PATH.LOGIN && this.props.mode !== AUTHORIZATION_MODE.LOGIN_MODE) {
            this.props.changeModeToLoginAction();
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.changeAuthorizationModeByLocation()
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.user) {
            nextProps.history.push(PATH.HOME);
            return false;
        }
        return true;
    }

    render() {
        this.titleClasses = [styles.title, styles.titleField].join(' ');
        return (
            <div className={styles.page}>
                <DocumentTitle title={this.props.documentTitle}/>
                <div className={styles.myContainer}>
                    <AuthorizationHeader/>
                    <h1 className={this.titleClasses}>{this.props.pageTitle}</h1>
                    <div className={styles.formRow}>
                        <AuthorizationForm/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    const {user, error, isFetching} = store.authorizationReducer;
    const {page, mode} = store.authorizationModeReducer;
    return {user, error, isFetching, mode, ...page};
};

const mapDispatchToProps = (dispatch) => ({
    changeModeToLoginAction: () => dispatch(changeModeToLoginActionCreator()),
    changeModeToSignUpAction: () => dispatch(changeModeToSignUpActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
