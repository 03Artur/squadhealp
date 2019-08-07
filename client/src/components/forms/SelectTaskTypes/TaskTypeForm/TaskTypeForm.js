/*
* React
* */
import React, {Component, Fragment, useEffect,} from 'react';
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
import styles from './TaskTypeForm.module.scss';
import {PATH, TASK_TYPE_DESCRIPTION, TASK_TYPE_IMAGES} from "../../../../constants";
import RadioTaskTypeCard from "./RadioTaskTypeCard/RadioTaskTypeCard";

import {
    removeSelectedTypesActionCreator,
    setSelectedTypesActionCreator
} from "../../../../actions/contest/constestActionCreators";

/*
* UTILS
* */


const TaskTypeForm = ({typesCombinations, selectedTypes, ...props}) => {





    const renderTypeCards = (combinations, className = '') => (
        combinations.map(item => {

            const title = item.join(' + ');
            const icons = item.map(type => TASK_TYPE_IMAGES.get(type));
            const description = TASK_TYPE_DESCRIPTION.get(title);

            return (
                <li key={title}>
                    <TaskTypeCard className={className} title={title} icons={icons}
                                  description={description}
                                  onClick={() => {
                                      props.onSubmit(item);
                                      props.onSubmitSuccess();
                                  }}/>
                </li>)
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
        <Fragment>
            <div className={[styles.typesContainer, styles.singleCardsContainer].join(' ')}>
                <div className={styles.container}>
                    <ul className={styles.row}>
                        {
                            renderSingleTypes()
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.typesContainer}>
                <div className={styles.container}>
                    <ul className={styles.row}>
                        {
                            renderGroupTypes()
                        }
                    </ul>
                </div>
            </div>

        </Fragment>
    )
};

TaskTypeForm.propTypes = {};

TaskTypeForm.defaultPros = {};

/*
* React redux
* */
TaskTypeForm.propTypes = {

};

TaskTypeForm.defaultPros = {};

const mapStateToProps = store => {
    const {selectedTypes, typesCombinations} = store.selectedTaskTypes;
    return {selectedTypes, typesCombinations};
}
const mapDispatchToProps = dispatch => ({
    removeSelectedTypesAction: () => dispatch(removeSelectedTypesActionCreator()),

});

export default connect(mapStateToProps, mapDispatchToProps)(TaskTypeForm)
