import { handleActions } from 'redux-actions';
import constants from './constants';

const {
  MOVIES_REQUEST,
  MOVIES_FULFILLED,
  MOVIES_REJECTED,
  MOVIES_CHANGE_SEARCH,
  MOVIES_CHANGE_STARS,
  MOVIES_SET_SELECTED_MOVIE,
} = constants;

const initialState = {
  isLoading: false,
  data: [],
  search: '',
  selectedStars: 0,
  selectedMovie: null,
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
      selectedStars: payload.star,
      isLoading: true,
    }),
    [MOVIES_SET_SELECTED_MOVIE]: (state, { payload }) => ({
      ...state,
      selectedMovie: state.data.find(item => item.id === parseInt(payload, 10)),
    }),
  },
  initialState,
);
