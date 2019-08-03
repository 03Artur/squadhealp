/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */


/*
* styles
* */
import styles from './TaskTypeCard.module.scss';

/*
* UTILS
* */
import {iconImagesURL} from "../../api/baseURL";

const TaskTypeCard = ({title, icons, description, ...props}) => {

    const renderIcons = () => {
        return icons.map(item => (
            <Fragment key={item.defaultImg}>
                <img src={`${iconImagesURL}/taskType/${item.defaultImg}`}
                     className={styles.defaultIcon} alt="icon"/>
                <img src={`${iconImagesURL}/taskType/${item.hoverImg}`} className={styles.hoverIcon}
                     alt="icon"/>
            </Fragment>
        ))
    };
    const combinedClassNameString = [styles.container, props.className].join(" ");
    return (
        <div onClick={props.onClick} className={combinedClassNameString}>
            {
                renderIcons()
            }
            <h5>
                {
                    title
                }
            </h5>
            <hr/>
            <p>
                {
                    description
                }
            </p>
        </div>
    )
};

TaskTypeCard.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    description: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({
        defaultImg: PropTypes.string,
        hoverImg: PropTypes.string,
    })),
    title: PropTypes.string,
};

TaskTypeCard.defaultPros = {
    onClick: function () {

    },
    className: '',
};

export default TaskTypeCard;
