import React from 'react';
import PropTypes from 'prop-types';
/*
import PropTypes from 'prop-types';
*/

import styles from './LinkButton.module.scss'
import {Link} from 'react-router-dom';
import {PATHS} from '../../../constants'

function LinkButton({to, text, ...props}) {

    return (
        <Link  to={to}>
            <div className={ [styles.content, props.className].join(' ')}>
            {
                props.children
            }
            </div>
        </Link>
    )
}

LinkButton.propTypes = {
    className: PropTypes.string,

};

LinkButton.defaultProps = {
    to: PATHS.HOME,
    children: 'Home',
    className: ''
};

export default LinkButton;


