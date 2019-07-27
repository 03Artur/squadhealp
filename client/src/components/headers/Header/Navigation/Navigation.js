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
import DropDownMenu from './DropDownMenu/DropDownMenu'
import UserIcon from "./UserItem/UserIcon/UserIcon";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
/*
* Styles
* */
import styles from './Navigation.module.scss';
import {PATH} from "../../../../constants";

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            chevron: faChevronDown,
            menuItems: [{
                text: 'View Dashboard View Dashboard View Dashboard View Dashboard', onClick: () => {
                }
            }, {
                text: 'My Account', onClick: () => {
                }
            }, {
                text: 'Logout', onClick: () => {
                }
            },]
        };
        this.toggleContainer = React.createRef();
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

    renderMenu = () => {
        if (this.state.isMenuOpen) {
            return (
                <DropDownMenu items={this.state.menuItems}/>
            )
        }
    };
    renderNavItems = () => {
        if (this.props.user) {
            return (
                <React.Fragment>
                    <div className={styles.item} ref={this.toggleContainer}>
                        <UserIcon/>
                        <span className={styles.greeting}>
                        {`Hi, ${this.props.user.firstName} `}<FontAwesomeIcon
                            icon={this.state.chevron}/>
                    </span>
                    </div>
                    {
                        this.renderMenu()
                    }
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
    const {user} = store.authorizationReducer;
    return {user};
};

export default connect(mapStateToProps)(Navigation)
