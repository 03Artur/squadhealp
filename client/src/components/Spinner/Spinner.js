import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.scss';



export default function Spinner(props) {
    const {color} = props;
    return (
        <div style={{color: color}} className={styles.loader}>Loading...</div>   );

}

Spinner.propTypes = {
    color: PropTypes.string,
};

Spinner.defaultProps = {
    color: 'black',
};

