
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestItem.module.scss';


const ContestItem = (props) => {


    return (
        <li>
            <div>{
                JSON.stringify(props.contest)
            }</div>
        </li>
    )
};

ContestItem.propTypes = {
    contest: PropTypes.object,
    className: PropTypes.string,
};

ContestItem.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestItem)
