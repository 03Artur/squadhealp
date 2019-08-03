/*
* React
* */
import React, {Component, Fragment, useEffect,} from 'react';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import TaskTypeCard from "../../components/TaskTypeCard/TaskTypeCard";
/*
* Styles
* */
import styles from './StartContestPage.module.scss';
import {setSelectedTypesActionCreator} from "../../actions/contest/constestActionCreators";

/*
* UTILS
* */
import {TASK_TYPE_DESCRIPTION, TASK_TYPE_IMAGES, TASK_TYPE} from "../../constants";

let StartContestPage = ({typesCombinations, selectedTypes, ...props}) => {

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
        return renderTypeCards(combinations);
    };
    return (
        <Fragment>
            <div className={styles.popularTypesContainer}>
                <div className={styles.container}>
                    <ul className={styles.row}>
                        {
                            renderSingleTypes()
                        }
                    </ul>
                </div>
            </div>

        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};
const mapStateToProps = store => store.taskTypes;
const mapDispatchToProps = dispatch => ({
    selectTypes: types => dispatch(setSelectedTypesActionCreator(types))

});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
