import jsonPlaceholder from "../api/jsonPlaceholder";

/**
 * Action Creator: Call & dispatch the fetchPosts() action creator,
 * then use lodash to find all unique users in the posts and call &
 * dispatch the fetchUser() action creator.
 */
export const fetchPostsAndUsers = id => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = [...new Set(getState().posts.map(post => post.userId))]
  userIds.forEach(id => dispatch(fetchUser(id)));
};

/**
 * Action Creator: Send a request for all posts from 
 * the JSONPlaceholder API and dispatch a FETCH_POSTS action
 */
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

/**
 * Action Creator: Send a request for all users from 
 * the JSONPlaceholder API and dispatch a FETCH_USERS action
 */
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};


/* Memoize the request function to ensure we don't send duplicate requests */
// import _ from 'loadash';
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
