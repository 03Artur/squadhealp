
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Filter.module.scss';


const Filter = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

Filter.propTypes = {
    className: PropTypes.string,
};

Filter.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
