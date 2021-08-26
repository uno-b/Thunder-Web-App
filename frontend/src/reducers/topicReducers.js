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

export const getTopicsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TOPICS_REQUEST:
      return { loading: true, ...state };
    case GET_TOPICS_SUCCESS:
      return { loading: false, topics: action.payload };
    case GET_TOPICS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addTopicReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TOPIC_REQUEST:
      return { loading: true, ...state };
    case ADD_TOPIC_SUCCESS:
      return { loading: false, topic: action.payload };
    case ADD_TOPIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateTopicReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TOPIC_REQUEST:
      return { loading: true, ...state };
    case UPDATE_TOPIC_SUCCESS:
      return { loading: false, topic: action.payload };
    case UPDATE_TOPIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteTopicReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TOPIC_REQUEST:
      return { loading: true, ...state };
    case DELETE_TOPIC_SUCCESS:
      return { loading: false, topic: action.payload };
    case DELETE_TOPIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
