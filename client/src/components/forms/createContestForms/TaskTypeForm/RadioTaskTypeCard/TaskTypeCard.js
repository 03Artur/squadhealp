/*
* React
* */
import React, {Component, Fragment, useEffect} from 'react';
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
import styles from './RadioTaskTypeCard.module.scss';

/*
* UTILS
* */
import {ICON_IMAGES_URL} from "../../../../../api/baseURL";


const Icons = ({icons,...props}) => {
    return icons.map(item => (
        <Fragment key={item.defaultImg}>
            <img src={`${ICON_IMAGES_URL}/taskType/${item.defaultImg}`}
                 className={styles.defaultIcon} alt="icon"/>
            <img src={`${ICON_IMAGES_URL}/taskType/${item.hoverImg}`} className={styles.hoverIcon}
                 alt="icon"/>
        </Fragment>
    ))
};


const TaskTypeCard = ({title, icons, description, ...props}) => {


    const combinedClassNameString = [styles.container, props.className].join(" ");

    return (

        <li onClick={props.onClick} className={combinedClassNameString}>
            {
                <Icons icons={icons}/>
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
        </li>
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
