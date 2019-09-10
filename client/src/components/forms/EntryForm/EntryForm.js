import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './EntryForm.module.scss';
import {reduxForm, Field} from 'redux-form'
import InputFile from "../_components/inputs/InputFile/InputFile";
import LabelInput from "../_components/inputs/LabelInput/LabelInput";
import {FORM_NAMES} from "../../../constants";
import SubmitButton from "../_components/buttons/SubmitButton/SubmitButton";
import Spinner from "../../Spinner/Spinner";
import {isRequired, notEmpty} from "../../../utils/reduxForm/validateValue";

const EntryForm = (props) => {

    const {handleSubmit, isFetching} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.fieldsContainer}>
                <Field validate={[isRequired,notEmpty,]} placeholder={'Title of Your Entry'} name={'title'} label={"Title"} component={LabelInput}/>
                <Field name={'files'} component={InputFile}/>
                <SubmitButton onClick={handleSubmit} isEnable={!isFetching}>{isFetching ?
                    <Spinner/> : 'Create Entry'}</SubmitButton>
            </div>
        </form>
    )
};

EntryForm.propTypes = {
    className: PropTypes.string,
};

EntryForm.defaultProps = {};


function mapStateToProps(state) {

    const {isFetching, error} = state.entryCreationReducer;
    return {
        isFetching,
        error,
    }
}

export default connect(mapStateToProps)(
    reduxForm({
        form: FORM_NAMES.ENTRY_FORM,
    })(EntryForm)
)
