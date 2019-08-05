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
import styles from './ContestInfo.module.scss';
import ContestForm from "../../../components/forms/ContestForm/ContestForm";

/*
* UTILS
* */



const ContestInfo = (props) => {


    return (
        <Fragment>
            <ContestForm />
        </Fragment>
    )
};

ContestInfo.propTypes = {

};

ContestInfo.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => {
    const {isNameExist} = store.createContest;
    return {isNameExist}
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestInfo)
