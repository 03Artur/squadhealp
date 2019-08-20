import React from 'react';
import PropTypes from 'prop-types';
/*
import PropTypes from 'prop-types';
*/

import styles from './LinkButton.module.scss'
import {Link} from 'react-router-dom';
import {PATHS} from '../../../constants'

function LinkButton({to, text, ...props}) {

    const combinedClassNamesString = [styles.container, styles.aReset, props.className].join(' ');
    return (
        <Link className={combinedClassNamesString} to={to}>
            {
                props.children
            }
        </Link>
    )
}

LinkButton.propTypes = {
    className: PropTypes.string,

};

LinkButton.defaultProps = {
    to: PATHS.HOME,
    children: 'Home'
};

export default LinkButton;


