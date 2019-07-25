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
* Styles
* */
import styles from './Template.module.scss';

const Template = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

Template.propTypes = {

};

Template.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Template)
