import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkButton.module.scss'


export default function LinkButton(props) {



    return (
            <div  onClick={props.onClick} className={styles.container}>
                {
                    props.text
                }
            </div>
    )
};


LinkButton.propTypes = {
    text: PropTypes.string,
};

LinkButton.defaultProps = {
    text: 'Here'
};


