import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './LinkButton.module.scss'


export default function LinkButton({to,toTitle, ...rest}) {



    return (
        <Link className = {styles.aReset} to={to}>
            <div className={styles.container}>
                {
                    toTitle
                }
            </div>
        </Link>
    )
};


LinkButton.propTypes = {
    to: PropTypes.string,
    toTitle: PropTypes.string,
};

LinkButton.defaultProps = {
    to: true,
    toTitle: 'Here'
};


