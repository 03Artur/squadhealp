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
import Header from '../../components/headers/Header/Header'
/*
* tyles
* */
import styles from './StartContestPage.module.scss';

/*
* UTILS
* */



const StartContestPage = (props) => {


    return (
        <Fragment>
            <Header/>

        </Fragment>
    )
};

StartContestPage.propTypes = {

};

StartContestPage.defaultPros = {

};

export default StartContestPage
