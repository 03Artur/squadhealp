/*
* React
* */
import React, {Component, Fragment, useEffect,} from 'react';

import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import styles from './TaskTypeForm.module.scss';
import {PATH, TASK_TYPE_DESCRIPTION, TASK_TYPE_IMAGES} from "../../../constants";
import RadioTaskTypeCard from "./RadioTaskTypeCard/RadioTaskTypeCard";


let TaskTypeForm = ({typesCombinations, handleSubmit, ...props}) => {


    const renderTypeCards = (combinations, className = '') => (
        combinations.map((item,index) => {

            const title = item.join(' + ');
            const icons = item.map(type => TASK_TYPE_IMAGES.get(type));
            const description = TASK_TYPE_DESCRIPTION.get(title);

            return (
                <Field name="taskTypes" type={'radio'} key={title}  component ={RadioTaskTypeCard}
                    value={item} className={className}
                                       title={title}
                                       icons={icons}
                                       description={description}
                                       onClick={item=> handleSubmit(item)}/>

            )
        }));

    const renderSingleTypes = () => {
        const combinations = typesCombinations.filter(item => item.length === 1);
        return renderTypeCards(combinations, styles.singleCard);
    };
    const renderGroupTypes = () => {
        const combinations = typesCombinations.filter(item => item.length > 1);
        return renderTypeCards(combinations);
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className={[styles.typesContainer, styles.singleCardsContainer].join(' ')}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h3>Our Most Popular Categories</h3>
                        <p>Pick from our most popular categories, launch a contest and begin receiving submissions right
                            away</p>
                        <hr/>
                    </div>
                    <ul className={styles.row}>{
                        renderSingleTypes()
                    }</ul>
                </div>
            </div>
            <div className={styles.typesContainer}>
                <div className={styles.container}>
                    <div className={[styles.title, styles.titleDark].join(' ')}>
                        <h3>Save With Our Bundle Packages</h3>
                        <p>Launch multiple contests and pay a discounted bundle price</p>
                        <hr/>
                    </div>
                    <ul className={styles.row}>{
                        renderGroupTypes()
                    } </ul>
                </div>
            </div>
        </form>
    )
};

TaskTypeForm.propTypes = {};

TaskTypeForm.defaultPros = {};


const mapStateToProps = state => {
    const {typesCombinations} = state.selectedTaskTypes;
    return {typesCombinations};
}

TaskTypeForm = connect(mapStateToProps)(TaskTypeForm);


export default reduxForm({
    form: "taskTypeForm",
})(TaskTypeForm);

