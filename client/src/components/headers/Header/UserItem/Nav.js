/*
* React
* */
import React, {Component,} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import DropDownMenu from './DropDownMenu/DropDownMenu'
import UserIcon from "./UserIcon/UserIcon";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
/*
* Styles
* */
import styles from './Nav.scss';

class Nav extends Component {
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
    getChevronClassName = () => {
        const classNames = [styles.chevron];
        if (!this.state.isMenuOpen) {
            classNames.push(styles.bottom);
        }
        return classNames.join(' ')
    };

    render() {
        return (

            <div onClick={this.onClickHandle} className={styles.container}>
                <div className={styles.item} ref={this.toggleContainer}>
                    <UserIcon className={styles.userIcon}/>
                    <span className={styles.greeting}>{`Hi, ${this.props.user.firstName} `}<FontAwesomeIcon
                        icon={this.state.chevron}/> </span>

                </div>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                {
                    this.renderMenu()
                }
            </div>
        );
    }
}

Nav.propTypes = {};

Nav.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user};
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
