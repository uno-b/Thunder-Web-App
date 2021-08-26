import axios from 'axios';
import {
  GET_TOPICS_REQUEST,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_FAIL,
  ADD_TOPIC_REQUEST,
  ADD_TOPIC_SUCCESS,
  ADD_TOPIC_FAIL,
  UPDATE_TOPIC_REQUEST,
  UPDATE_TOPIC_SUCCESS,
  UPDATE_TOPIC_FAIL,
  DELETE_TOPIC_REQUEST,
  DELETE_TOPIC_SUCCESS,
  DELETE_TOPIC_FAIL,
} from '../constants/forumConstants';

export const getTopics = (subjectId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TOPICS_REQUEST,
    });

    const { data } = await axios.get(`/api/forum/subjects/${subjectId}`);

    dispatch({
      type: GET_TOPICS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TOPICS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addTopic =
  (subjectId, title, desc) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADD_TOPIC_REQUEST,
      });

      const topic = {
        title,
        desc,
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
        `/api/forum/subjects/${subjectId}`,
        topic,
        config
      );

      dispatch({
        type: ADD_TOPIC_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_TOPIC_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateTopic =
  (topicId, title, desc) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_TOPIC_REQUEST,
      });

      const topic = {
        title,
        desc,
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
        `/api/forum/topics/${topicId}`,
        topic,
        config
      );

      dispatch({
        type: UPDATE_TOPIC_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TOPIC_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteTopic = (topicId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_TOPIC_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/forum/topics/${topicId}`, config);

    dispatch({
      type: DELETE_TOPIC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TOPIC_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
