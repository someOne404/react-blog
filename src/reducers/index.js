import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    //dummy: () => 999 //to get rid of error message
    posts: postsReducer,
    users: usersReducer
});