import axios from 'axios';
import {
  GET_SUBJECTS_REQUEST,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
  ADD_SUBJECT_REQUEST,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAIL,
  UPDATE_SUBJECT_REQUEST,
  UPDATE_SUBJECT_SUCCESS,
  UPDATE_SUBJECT_FAIL,
  DELETE_SUBJECT_REQUEST,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAIL,
} from '../constants/forumConstants';

export const getSubjects = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SUBJECTS_REQUEST,
    });

    const { data } = await axios.get('/api/forum/subjects');

    dispatch({
      type: GET_SUBJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SUBJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addSubject = (title, desc) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_SUBJECT_REQUEST,
    });

    // Create the subject to add
    const subject = {
      title,
      desc,
    };

    // Get the current logged-in user
    const {
      userLogin: { userInfo },
    } = getState();

    // Put the token inside the config and send it along with the subject
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/forum/subjects', subject, config);

    dispatch({
      type: ADD_SUBJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_SUBJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSubject =
  (subjectId, title, desc) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_SUBJECT_REQUEST,
      });

      const subject = {
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
        `/api/forum/subjects/${subjectId}`,
        subject,
        config
      );

      dispatch({
        type: UPDATE_SUBJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SUBJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteSubject = (subjectId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_SUBJECT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/api/forum/subjects/${subjectId}`,
      config
    );

    dispatch({
      type: DELETE_SUBJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SUBJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
