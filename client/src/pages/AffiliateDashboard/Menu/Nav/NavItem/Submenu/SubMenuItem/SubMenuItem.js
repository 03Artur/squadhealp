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
import styles from './SubMenuItem.module.scss';

/*
* UTILS
* */



const SubMenuItem = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

SubMenuItem.propTypes = {
    className: PropTypes.string,
};

SubMenuItem.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SubMenuItem)