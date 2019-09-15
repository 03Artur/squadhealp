import React, from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './FilterForm.module.scss';
import {reduxForm, Field} from 'redux-form';
import Input from "./Input/Input";
import {FILTER_TYPE, FORM_NAMES} from "../../../../constants";
import {
    addPropsToFilterActionCreator,
    removeFilterPropsActionCreator
} from "../../../../actions/actionCreators/contestActionCreators/contestFilterActionCreator";


const FilterForm = (props) => {

    const {handleSubmit, values, initialValues, type, title} = props;

    const onChange = (event, newValue, previousValue, name) => {

        console.log()
    };

    const renderField = (item, index) => {
        return <Field title={item.title} type={type} name={type === FILTER_TYPE.RADIO ? 'filter' : 'filter[]'}
                      value={item.value} component={Input}/>
    };

    const renderFields = () => {
        return values.map(renderField)
    };

    return (
        <div className={styles.propContainer}>
            <h6 className={styles.propTitle}>{title}</h6>
            <form className={styles.form}>
                {renderFields()}
            </form>
        </div>
    )
};

FilterForm.propTypes = {
    className: PropTypes.string,
};

FilterForm.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    changeFilterPropAction: (key, value) => dispatch({}),
    addFilterPropAction: (key, value) => dispatch(addPropsToFilterActionCreator(key, value)),
    removeFilterPropAction: (key) => dispatch(removeFilterPropsActionCreator(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({

    }
)(FilterForm))
