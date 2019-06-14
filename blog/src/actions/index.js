import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = async () => {
    // TODO: Use middleware to properly fetch posts
    const response = await jsonPlaceholder.get("/posts");
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};