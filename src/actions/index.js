import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => { // return a function to be handled by the middleware thunk
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }
};