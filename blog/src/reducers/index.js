import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersResucer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersResucer
});
