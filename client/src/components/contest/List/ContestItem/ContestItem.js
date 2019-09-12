import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContestItem.module.scss';
import ContestInfo from "./ContestInfo/ContestInfo";
import ContestButtons from "./ContestButtons/ContestButtons";

const ContestItem = (props) => {

    const {contest} = props;

    return (
        <li className={styles.container}>
            <ContestInfo contest={contest}/>
            <ContestButtons contest={contest}/>
        </li>
    )
};

ContestItem.propTypes = {
    task: PropTypes.object,
    className: PropTypes.string,
    onSelect: PropTypes.func,
};

ContestItem.defaultProps = {};

export default ContestItem;
