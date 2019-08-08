/*
* React
* */
import React, {Component, Fragment,useEffect} from 'react';
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
import {iconImagesURL} from "../../../../api/baseURL";

const RadioTaskTypeCard = ({title, icons, description, input, ...props}) => {


    useEffect(()=>{
        console.log(input);
    });

    const renderIcons = () => {
        return icons.map(item => (
            <Fragment key={item.defaultImg} >
                <img src={`${iconImagesURL}/taskType/${item.defaultImg}`}
                     className={styles.defaultIcon} alt="icon"/>
                <img src={`${iconImagesURL}/taskType/${item.hoverImg}`} className={styles.hoverIcon}
                     alt="icon"/>
            </Fragment>
        ))
    };

    const combinedClassNameString = [styles.container, props.className].join(" ");

    return (

        <label className={combinedClassNameString}> {
            renderIcons()
        }<h5>
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
            <input style={{display: "none"}} {...input} onClick={props.onClick}/>
        </label>
    )
};

RadioTaskTypeCard.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    description: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({
        defaultImg: PropTypes.string,
        hoverImg: PropTypes.string,
    })),
    title: PropTypes.string,
};

RadioTaskTypeCard.defaultPros = {
    onClick: function () {

    },
    className: '',
};

export default RadioTaskTypeCard;
