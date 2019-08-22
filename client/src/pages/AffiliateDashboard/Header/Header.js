import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss'


function Header(props) {


    return (
        <React.Fragment>
            <header className={styles.header}>
                {
                    props.children
                }


            </header>
        </React.Fragment>
    );
}







export default (Header)

