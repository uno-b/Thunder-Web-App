import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';
import {
  getSubjectsReducer,
  addSubjectReducer,
  updateSubjectReducer,
  deleteSubjectReducer,
} from './reducers/subjectReducers';
import {
  getTopicsReducer,
  addTopicReducer,
  updateTopicReducer,
  deleteTopicReducer,
} from './reducers/topicReducers';
import {
  getPostsReducer,
  addPostReducer,
  updatePostReducer,
  deletePostReducer,
} from './reducers/postReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  getSubjects: getSubjectsReducer,
  addSubject: addSubjectReducer,
  updateSubject: updateSubjectReducer,
  deleteSubject: deleteSubjectReducer,
  getTopics: getTopicsReducer,
  addTopic: addTopicReducer,
  updateTopic: updateTopicReducer,
  deleteTopic: deleteTopicReducer,
  getPosts: getPostsReducer,
  addPost: addPostReducer,
  updatePost: updatePostReducer,
  deletePost: deletePostReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
