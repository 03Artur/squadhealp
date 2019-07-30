import React from 'react';
/*
import PropTypes from 'prop-types';
*/
import {connect} from 'react-redux'
import styles from './LinkButton.module.scss'
import {Link} from 'react-router-dom';
import {PATH} from '../../../../constants'

 function LinkButton({to,text}) {

    return (
        <Link className={styles.aReset} to={to}>
            <div className={styles.container}>
                {
                    text
                }
            </div>
        </Link>
    )
}




LinkButton.defaultProps = {
    to: PATH.HOME,
    text: 'Home'
};

const mapStateToProps = state => {
    const {linkButton} = state.authorizationModeReducer;
    return {...linkButton};
};


export default connect(mapStateToProps)(LinkButton);
