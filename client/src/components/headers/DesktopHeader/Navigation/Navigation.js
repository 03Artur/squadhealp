/*
* React
* */
import React, {Component,} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
/*
* Redux & friends
* */
import {connect} from 'react-redux';
/*
* Components
* */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";


import UserItem from "../../UserItem/UserItem";
/*
* Styles
* */
import styles from './Navigation.module.scss';
import {PATH} from "../../../../constants";

class Navigation extends Component {

    renderNavItems = () => {
        if (this.props.user) {
            return (
                <React.Fragment>
                    <div className={styles.item} ref={this.toggleContainer}>
                        <UserItem/>
                    </div>
                    <div className={styles.item}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div className={styles.item}><Link to={PATH.LOGIN}>Login</Link></div>
                    <div className={styles.item}><Link to={PATH.SIGN_UP}>Sign up</Link></div>
                </React.Fragment>
            )
        }
    };

    render() {
        return (
            <div className={styles.container} onClick={this.onClickHandle}>
                {
                    this.renderNavItems()
                }
            </div>
        );
    }
}

Navigation.propTypes = {};

Navigation.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorization;
    return {user};
};

export default connect(mapStateToProps)(Navigation)
