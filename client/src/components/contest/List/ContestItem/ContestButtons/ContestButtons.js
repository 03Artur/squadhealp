import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import OtherButtons from "./OtherButtons/OtherButtons";
import OwnerButtons from "./OwnerButtons/OwnerButtons";
import {ROLES} from "../../../../../constants";
import CreativeButtons from "./CreativeButtons/CreativeButtons";


const ContestButtons = (props) => {

    const {user, contest} = props;

    if (user.role === ROLES.CREATIVE) {
        return <CreativeButtons contest={contest}/>
    }
    if (contest.contest.userId === user.id) {
        return <OwnerButtons contest={contest}/>
    }

    return <OtherButtons contest={contest}/>
};

ContestButtons.propTypes = {
    className: PropTypes.string,
    contest: PropTypes.object,
};

ContestButtons.defaultProps = {};

const mapStateToProps = state => {
    const {user} = state.authorizationReducer;
    return {
        user,
    }
};

export default connect(mapStateToProps)(ContestButtons)
