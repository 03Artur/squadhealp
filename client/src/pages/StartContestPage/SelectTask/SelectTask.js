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
import styles from './SelectTask.module.scss';
import {TASK_TYPE_DESCRIPTION, TASK_TYPE_IMAGES} from "../../../constants";
import TaskTypeCard from "../../../components/TaskTypeCard/TaskTypeCard";
import ProgressInfo from "../../../components/ProgressInfo/ProgressInfo";
import StartContestNav from "../../../components/navigations/StartContestNav/StartContestNav";
import {setSelectedTypesActionCreator} from "../../../actions/contest/constestActionCreators";

/*
* UTILS
* */



const SelectTask = ({typesCombinations, selectedTypes, ...props}) => {
    useEffect(() => {
        if (selectedTypes) {
            console.log(selectedTypes);
        }
    }, [selectedTypes]);


    const renderTypeCards = (combinations, className = '') => (
        combinations.map(item => {

            const title = item.join(' + ');
            const icons = item.map(type => TASK_TYPE_IMAGES.get(type));
            const description = TASK_TYPE_DESCRIPTION.get(title);

            return (
                <li key={title}>
                    <TaskTypeCard className={className}  title={title} icons={icons}
                                  description={description}
                                  onClick={() => props.selectTypes(item)}/>
                </li>)
        }));
    const renderSingleTypes = () => {
        const combinations = typesCombinations.filter(item => item.length === 1);
        return renderTypeCards(combinations,styles.singleCard);
    };

    return (
        <Fragment>
            <ProgressInfo />
            <div className={styles.popularTypesContainer}>
                <div className={styles.container}>
                    <ul className={styles.row}>
                        {
                            renderSingleTypes()
                        }
                    </ul>
                </div>
            </div>
            <StartContestNav />
        </Fragment>
    )
};

SelectTask.propTypes = {

};

SelectTask.defaultPros = {

};

/*
* React redux
* */
SelectTask.propTypes = {};

SelectTask.defaultPros = {};

const mapStateToProps = store => store.taskTypes;
const mapDispatchToProps = dispatch => ({
    selectTypes: types => dispatch(setSelectedTypesActionCreator(types))

});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTask)
