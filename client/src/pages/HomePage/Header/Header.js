import React from 'react';
import {connect} from 'react-redux';
import styles from '';

function Header(props) {

    const {} = props;


    return (
        <React.Fragment>
            <header>
                <div className={styles.topRow}></div>
            </header>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    const {user} = state.authorization;

    return {
        user,
    }
}

function mapDispatchToProps(dispatch) {

   return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
