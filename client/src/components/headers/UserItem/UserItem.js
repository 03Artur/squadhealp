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
import UserIcon from "./UserIcon/UserIcon";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

/*
* Styles
* */
import styles from './UserItem.module.scss';
import DropDownMenu from "../DesktopHeader/Navigation/DropDownMenu/DropDownMenu";
import {logoutActionCreator} from "../../../actions/authorizationActionCreators";

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            chevron: faChevronDown,
            menuItems: [
                {
                    text: 'View Dashboard',
                    onClick: () => {
                    },
                },
                {
                    text: 'My Account',
                    onClick: () => {
                    }
                },
                {
                    text: 'Logout',
                    onClick: this.props.logoutAction,
                },
            ],
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

    render() {
        return (
            <div onClick={this.onClickHandle} ref={this.toggleContainer}>
                <UserIcon/>
                <span className={styles.greeting}>
                    {
                        `Hi, ${this.props.user.firstName} `
                    }
                    <FontAwesomeIcon icon={this.state.chevron}/>
                </span>
                {
                    this.renderMenu()
                }
            </div>

        );
    }
}


UserItem.propTypes = {};

UserItem.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorization;
    return {user};
};
const mapDispatchToProps = dispatch => ({
    logoutAction: () =>{  console.log("LOGOUT ACTION"); return  dispatch(logoutActionCreator())}

});

export default connect(mapStateToProps,mapDispatchToProps)(UserItem)
