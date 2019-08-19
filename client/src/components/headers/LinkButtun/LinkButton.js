import React from 'react';
import PropTypes from 'prop-types';
/*
import PropTypes from 'prop-types';
*/

import styles from './LinkButton.module.scss'
import {Link} from 'react-router-dom';
import {PATHS} from '../../../constants'

 function LinkButton({to,text,...props}) {

    const combinedClassNamesString= [styles.container, props.className].join(' ');
    return (
        <Link className={styles.aReset} to={to}>
            <div className={combinedClassNamesString}>
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
    children: 'Home'
};

export default LinkButton;


