import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, change, submit} from 'redux-form';
import styles from './TaskTypeForm.module.scss';
import {FORM_NAMES, TASK_TYPE_DESCRIPTION, TASK_TYPE_IMAGES} from "../../../../constants";

import TaskTypeCard from "./RadioTaskTypeCard/TaskTypeCard";


let TaskTypeForm = ({typesCombinations, handleSubmit, dispatch, ...props}) => {

    const onCardClick = async (value) => {
        await dispatch(change(FORM_NAMES.TASK_TYPE_FORM, 'types', value));
        await dispatch(submit(FORM_NAMES.TASK_TYPE_FORM));
    };

    const renderTypeCards = (combinations, className = '') => (
        combinations.map((item) => {
            const title = item.join(' + ');
            const icons = item.map(type => TASK_TYPE_IMAGES.get(type));
            const description = TASK_TYPE_DESCRIPTION.get(title);
            return (
                <TaskTypeCard key={title} onClick={() => onCardClick(item)} icons={icons} title={title}
                              className={className} description={description}/>
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
        <form className={styles.formContainer} onSubmit={handleSubmit}>
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

const mapStateToProps = state => {
    const {typesCombinations} = state.contestCreation;
    return {typesCombinations};
};

export default connect(mapStateToProps)(reduxForm({
    form: FORM_NAMES.TASK_TYPE_FORM,
})(TaskTypeForm));




