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

export const getSubjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SUBJECTS_REQUEST:
      return { loading: true, ...state };
    case GET_SUBJECTS_SUCCESS:
      return { loading: false, subjects: action.payload };
    case GET_SUBJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addSubjectReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SUBJECT_REQUEST:
      return { loading: true, ...state };
    case ADD_SUBJECT_SUCCESS:
      return { loading: false, subject: action.payload };
    case ADD_SUBJECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateSubjectReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SUBJECT_REQUEST:
      return { loading: true, ...state };
    case UPDATE_SUBJECT_SUCCESS:
      return { loading: false, subject: action.payload };
    case UPDATE_SUBJECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteSubjectReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SUBJECT_REQUEST:
      return { loading: true, ...state };
    case DELETE_SUBJECT_SUCCESS:
      return { loading: false, subject: action.payload };
    case DELETE_SUBJECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
