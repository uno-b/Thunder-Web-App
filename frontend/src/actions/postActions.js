import axios from 'axios';
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

export const getPosts = (topicId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_POSTS_REQUEST,
    });

    const { data } = await axios.get(`/api/forum/topics/${topicId}`);

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addPost = (topicId, content) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_POST_REQUEST,
    });

    const post = {
      content,
    };

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/forum/topics/${topicId}`,
      post,
      config
    );

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePost = (postId, content) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_POST_REQUEST,
    });

    const post = {
      content,
    };

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/forum/posts/${postId}`,
      post,
      config
    );

    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (postId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/forum/posts/${postId}`, config);

    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
