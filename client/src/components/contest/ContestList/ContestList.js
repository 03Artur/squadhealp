
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestList.module.scss';


const ContestList = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

ContestList.propTypes = {
    className: PropTypes.string,
};

ContestList.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestList)
