import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LikeButton.module.scss';
import Icon from '@mdi/react';
import {mdiCardsHeart} from '@mdi/js';
import classNames from 'classnames';
import {
    dislikeContestActionCreator,
    likeContestActionCreator
} from "../../../../../../actions/actionCreators/contestActionCreators/constestActionCreators";


const LikeButton = (props) => {

    const {isLiked, likeContestAction,dislikeContestAction, taskId} = props;

    const onClick = () => {
        if(isLiked){
            dislikeContestAction(taskId)
        }else{
            likeContestAction(taskId)
        }
    };

    return (
        <div onClick={onClick} className={styles.container}>
            <Icon path={mdiCardsHeart}
                  className={classNames(styles.icon, {[styles.liked]: isLiked, [styles.hoverColor]: !isLiked})}
                  size={'40px'}/>
        </div>
    )
};

LikeButton.propTypes = {
    className: PropTypes.string,
    isLiked: PropTypes.bool.isRequired,
    taskId: PropTypes.number.isRequired,
};

LikeButton.defaultProps = {};


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    likeContestAction: taskId => dispatch(likeContestActionCreator(taskId)),
    dislikeContestAction: taskId => dispatch(dislikeContestActionCreator(taskId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)
