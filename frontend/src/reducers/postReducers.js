import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
} from '../constants/forumConstants';

export const getPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { loading: true, ...state };
    case GET_POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case GET_POSTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addPostReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return { loading: true, ...state };
    case ADD_POST_SUCCESS:
      return { loading: false, post: action.payload };
    case ADD_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updatePostReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_POST_REQUEST:
      return { loading: true, ...state };
    case UPDATE_POST_SUCCESS:
      return { loading: false, post: action.payload };
    case UPDATE_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deletePostReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return { loading: true, ...state };
    case DELETE_POST_SUCCESS:
      return { loading: false, post: action.payload };
    case DELETE_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
