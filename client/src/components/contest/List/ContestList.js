
import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestList.module.scss';


const ContestList = (props) => {

    useEffect(() => {



    },[]);

    return (
        <Fragment>

        </Fragment>
    )
};

ContestList.propTypes = {
    className: PropTypes.string,
};

ContestList.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => {
    const {contests} = store.contests

};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestList)
