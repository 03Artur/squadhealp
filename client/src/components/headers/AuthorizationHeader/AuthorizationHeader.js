/*
* REACT
* */
import React from 'react';
/*
* REDUX & FRIENDS
* */
import {connect} from 'react-redux'
import {modeActionCreator} from '../../../actions/authorizationActionCreators';

/*
* COMPONENTS
* */
import Logo from '../../Logo/Logo';
import LinkButton from "./LinkButtun/LinkButton";

/*
* STYLES
* */
import styles from './AuthorizationHeader.module.scss';


function AuthorizationHeader({mode, ...props}) {

    const getSetting = () => (
        props.isLoginMode ? {
                linkTitle: 'Sign Up',
            }
            :
            {
                linkTitle: 'Login',
            });


    const settings = getSetting();

    const changeMode = () => {
        let newValue = !props.isLoginMode;
        props.changeModeAction(newValue);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerRow}>
                <Logo isColor={false}/>
                <LinkButton onClick={changeMode} text={settings.linkTitle}/>
            </div>
        </header>
    );

}

const mapStateToProps = state => {
    const {isLoginMode} = state.authorizationModeReducer;
    return {isLoginMode};
};
const mapDispatchToProps = (dispatch) => ({
    changeModeAction: isLoginMode => dispatch(modeActionCreator(isLoginMode))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationHeader)

