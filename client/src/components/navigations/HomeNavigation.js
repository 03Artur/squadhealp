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
* tyles
* */
import styles from './HomeNavigation.module.scss';

/*
* UTILS
* */



const HomeNavigation = (props) => {


    return (
        <nav className={styles.}>

        </nav>
    )
};

HomeNavigation.propTypes = {

};

HomeNavigation.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation)
