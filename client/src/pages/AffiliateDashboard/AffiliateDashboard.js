import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import styles from './AffiliateDashboard.module.scss';
import Menu from "./Menu/Menu";
import UserItem from "./Header/UserItem/UserItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import breackpoints from '../../styles/breackpoints.scss';

function AffiliateDashboard(props) {

    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const menuSwitcher = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const onOutsideClick = (e) => {
        if (!window.matchMedia(`(min-width: ${breackpoints.md})`).matches && isMenuOpen && (!menuRef.current.contains(e.target) || !menuButtonRef.current.contains(e.target))) {
            setIsMenuOpen(false);
        }
    };
    const getMenuContainerClasses = () => {
        return [styles.menuContainer, isMenuOpen ? styles.menuContainerOpen : ''].join(' ');
    };

    const menu = () => (
        <div className={getMenuContainerClasses()} ref={menuRef}>
            <Menu/>
        </div>);
    const header = () => (
        <Header>
            <div ref={menuButtonRef} onClick={menuSwitcher} className={styles.menuIconContainer}>
                <FontAwesomeIcon className={styles.burgerIcon} icon={faBars}/>
            </div>
            <div className={styles.userItemContainer}>
                <UserItem/>
            </div>
        </Header>
    );
    return (
        <div className={styles.pageContainer} onClick={onOutsideClick}>
            {
                menu()
            }
            <div className={styles.contentContainer}>
                {
                    header()
                }
            </div>
        </div>
    );

}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AffiliateDashboard)

