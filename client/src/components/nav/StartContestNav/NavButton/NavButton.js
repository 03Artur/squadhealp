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
import styles from './NavButton.module.scss';

/*
* UTILS
* */


const NavButton = (props) => {

   const checkClick = () => {
       if(props.isEnable){
           props.onClick();
       }
   }

    const getClassName = () => {
        const classNames = [styles.container, props.className];
        if(!props.isEnable){
            classNames.push(styles.disable)
        }
        return  classNames.join(" ");

    };
    const classNames = getClassName();
    return (
        <div onClick={checkClick} className={classNames}>
            {
                props.text
            }
        </div>
    )
};

NavButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    isEnable: PropTypes.bool,
    onClick: PropTypes.func,
};

NavButton.defaultProps = {
    className: '',
    text: "button",
    isEnable: true,

};

/*
* React redux
* */


export default NavButton
