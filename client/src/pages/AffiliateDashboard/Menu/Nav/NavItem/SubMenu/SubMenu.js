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
import styles from './SubMenu.module.scss';

/*
* UTILS
* */



const SubMenu = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

SubMenu.propTypes = {
    className: PropTypes.string,
};

SubMenu.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu)
