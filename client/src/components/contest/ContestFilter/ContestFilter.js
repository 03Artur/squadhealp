
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestFilter.module.scss';


const ContestFilter = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

ContestFilter.propTypes = {
    className: PropTypes.string,
};

ContestFilter.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestFilter)
