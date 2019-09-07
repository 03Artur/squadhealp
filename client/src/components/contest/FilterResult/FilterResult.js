
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './FilterResult.module.scss';


const FilterResult = (props) => {


    const renderResultItem = () => {

    };

    return (
        <ul>

        </ul>
    )
};

FilterResult.propTypes = {
    className: PropTypes.string,
};

FilterResult.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => {
    const {} = state.contestFilterReducer()
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterResult)
