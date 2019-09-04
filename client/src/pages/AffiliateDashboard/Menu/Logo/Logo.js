import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import logoSmall from '../../../../assets/icons/logo/SquadHelpSquareWhiteTransparentSmall.png';
import logoLarge from '../../../../assets/icons/logo/logo.png';
import classNames from 'classnames';
import {PATHS} from "../../../../constants";
import {Link} from 'react-router-dom';
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
import styles from './Logo.module.scss';

/*
* UTILS
* */

const getLogoClassName = (isMenuOpen) => {
    return classNames(styles.logoContainer,
        {
            [styles.logoSmall]: !isMenuOpen,
        }
    );
};



const Logo = (props) => {

    const {isMenuOpen} = props;

    return (
        <Link className={styles.link} to={PATHS.HOME}>
            <span className={getLogoClassName(isMenuOpen)}>
            <img className={styles.logoImage} src={isMenuOpen ? logoLarge : logoSmall}/>
            </span>
        </Link>
    )
};

Logo.propTypes = {
    className: PropTypes.string,
};

Logo.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => {

    const {isOpen} = store.affiliateDashboardMenu;

    return {
        isMenuOpen: isOpen,
    }

};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Logo)
