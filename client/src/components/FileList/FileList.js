
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './FileList.module.scss';


const FileList = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

FileList.propTypes = {
    className: PropTypes.string,
};

FileList.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FileList)
