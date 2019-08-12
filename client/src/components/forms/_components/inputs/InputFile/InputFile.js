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
import styles from './InputFile.module.scss';

/*
* UTILS
* */



const InputFile = ({name,input ,...props}) => {


    return (

        <div className={styles.container}>
            <label className={styles.labelButton}>
                Choose file
                <input {...input} multiple={false} type='file' className={styles.inputFile}/>

            </label>
            <div className={styles.fileNameContainer}>
                <span>{input.value|"No File Chosen"}</span>
            </div>
        </div>

    )
};

InputFile.propTypes = {

};

InputFile.defaultPros = {

};

/*
* React redux
* */


export default InputFile