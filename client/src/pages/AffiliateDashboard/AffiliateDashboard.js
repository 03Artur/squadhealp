import React, {useState, useRef} from 'react';
import Header from "./Header/Header";
import styles from './AffiliateDashboard.module.scss';
import Menu from "./Menu/Menu";

function AffiliateDashboard(props) {

    return (
        <div className={styles.pageContainer}>
            <Menu/>
            <div className={styles.contentContainer}>
                <Header/>
            </div>
        </div>
    );
}

export default (AffiliateDashboard)
