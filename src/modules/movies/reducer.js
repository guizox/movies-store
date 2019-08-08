import { handleActions } from 'redux-actions';
import constants from './constants';

const {
  MOVIES_REQUEST,
  MOVIES_FULFILLED,
  MOVIES_REJECTED,
  MOVIES_CHANGE_SEARCH,
  MOVIES_CHANGE_STARS,
} = constants;

const initialState = {
  isLoading: false,
  data: [],
  search: '',
  selectedStars: 0,
};

export default handleActions(
  {
    [MOVIES_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [MOVIES_FULFILLED]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: payload,
    }),
    [MOVIES_REJECTED]: state => ({
      ...state,
      isLoading: false,
    }),
    [MOVIES_CHANGE_SEARCH]: (state, { payload }) => ({
      ...state,
      search: payload,
    }),
    [MOVIES_CHANGE_STARS]: (state, { payload }) => ({
      ...state,
      selectedStars: payload,
    }),
  },
  initialState,
);
