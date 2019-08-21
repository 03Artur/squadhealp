import React from 'react';
import {connect} from 'react-redux';
import UserItem from "../../UserItem/UserItem";
import {Link} from 'react-router-dom';
import styles from "./AuthorizationNav.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {PATHS} from "../../../../../constants";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import DropDownMenu from "../../UserItem/DropDownMenu/DropDownMenu";

class AuthorizationNav extends React.Component {

    constructor(props) {
        super(props);
        this.toggleContainer = React.createRef();
        this.state = {
            isMenuOpen: false,
            chevron: faChevronDown,
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler)
    }

    onClickHandle = () => {
        this.setState(currentState => ({
            isMenuOpen: !currentState.isMenuOpen,
            chevron: currentState.isMenuOpen ? faChevronDown : faChevronUp
        }))
    };

    onClickOutsideHandler = e => {
        if (this.state.isMenuOpen && !this.toggleContainer.current.contains(e.target)) {
            this.setState({isMenuOpen: false, chevron: faChevronDown});
        }
    };
    renderNavItem = () => {
        if (this.props.user) {

            return (
                <React.Fragment>
                    <div ref={this.toggleContainer} onClick={this.onClickHandle} className={styles.link}>
                        <UserItem/>
                        <FontAwesomeIcon className={styles.chevron} icon={this.state.chevron}/>
                    </div>
                    <div className={[styles.link,styles.mdHidden].join(' ') }>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                </React.Fragment>
            )
        } else {

            return (
                <React.Fragment>
                    <Link className={styles.link} to={PATHS.LOGIN}>Login</Link>
                    <Link className={styles.link} to={PATHS.SIGN_UP}>Sign Up</Link>
                </React.Fragment>
            )
        }
    };
    renderUserItemMenu = () => {
        if (this.state.isMenuOpen) {
            return (
                <DropDownMenu items={this.props.homeUserNav}/>
            )
        }
    };

    render() {
        return (
            <nav className={styles.topRowNav}>
                {
                    this.renderNavItem()
                }
                {
                    this.renderUserItemMenu()
                }
            </nav>
        )
    }
}


function mapStateToProps(state) {
    const {user} = state.authorization;
    const {homeUser:homeUserNav} = state.siteNavigation;
    return {user, homeUserNav};
}

export default connect(mapStateToProps)(AuthorizationNav)
