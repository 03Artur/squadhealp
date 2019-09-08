
import React, {Component, Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './SingleContestPage.module.scss';


const SingleContestPage = (props) => {

    useEffect(()=> {






    },[]);



    return (
        <Fragment>

        </Fragment>
    )
};

SingleContestPage.propTypes = {
    className: PropTypes.string,
};

SingleContestPage.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContestPage)
