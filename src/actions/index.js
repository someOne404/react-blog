import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // get unique user ids 
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    userIds.forEach(id => dispatch(fetchUser(id))); // no need to put await in front of dispatch, as we don't have any logic after fetching user

};

export const fetchPosts = () => { // return a function to be handled by the middleware thunk
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};


// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });