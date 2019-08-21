/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
/*
* Components
* */


/*
* Styles
* */
import styles from './DropDownMenu.module.scss';
import {logoutActionCreator} from "../../../../../actions/authorizationActionCreators";
import {PATHS, testMenuItemStyle} from "../../../../../constants";

const DropDownMenu = (props) => {

    const renderItems = () => {
        return props.items.map((item) => (

            <li style={item.to!=='#'? testMenuItemStyle:undefined} key={item.title}>
                <Link className={styles.menuItem} to={item.to} >
                    {
                        item.title
                    }
                </Link>
            </li>
        ))
    };

    return (
        <ul className={styles.container}>
            {
                renderItems()
            }
            <li style={testMenuItemStyle} onClick={props.logoutAction}>
                <Link className={styles.menuItem} to='#'>
                    Logout
                </Link>

            </li>
        </ul>
    )
};

DropDownMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        to: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                pathname: PropTypes.string.isRequired,
                search: PropTypes.string,
            })
        ]).isRequired,
    })),
};

DropDownMenu.defaultPros = {
    items: [],
};

/*
* React redux
* */
const mapStateToProps = store => {
    return {};
};
const mapDispatchToProps = dispatch => ({
    logoutAction: () => dispatch(logoutActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu)
