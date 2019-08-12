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

const adaptFileEventToValue = delegate =>
    e => {
    console.log(e.target.files);
    delegate(e.target.files);}

const InputFile = ({
                       input: {
                           value: omitValue, onChange, onBlur, ...inputProps,
                       },
                       meta: omitMeta,
                       ...props,
                   }) => {



    const renderFileList = () => {
        omitValue.map(item => (
            <div>
                {
                    item.name
                }
            </div>
        ))
    };

    return (
        <div className={styles.container}>
            <label className={styles.labelButton}>
                Choose file
                <input onChange={adaptFileEventToValue(onChange)}
                       onBlur={adaptFileEventToValue(onBlur)}
                       multiple={true}
                       type="file"
                       {...inputProps}
                       {...props}
                       className={styles.inputFile}/>

            </label>
            <div className={styles.fileNameContainer}>
                <span>{"No File Chosen"}</span>
                {
                    renderFileList()
                }
            </div>
        </div>

    )
};

InputFile.propTypes = {};

InputFile.defaultPros = {};

/*
* React redux
* */


export default InputFile
