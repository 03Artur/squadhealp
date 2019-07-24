import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkButton.module.scss'
import {Link} from 'react-router-dom';
import PATH from '../../../../constants/paths'

export default function LinkButton(props) {


    return (
        <Link className={styles.aReset} to={props.to}>
            <div className={styles.container}>
                {
                    props.text
                }
            </div>
        </Link>
    )
};


LinkButton.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string,
};

LinkButton.defaultProps = {
    to: PATH.HOME,
    text: 'HomePage'
};


