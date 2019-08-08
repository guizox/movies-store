import { createAction } from 'redux-actions';
import constants from './constants';

const {
  MOVIES_REQUEST,
  MOVIES_FULFILLED,
  MOVIES_REJECTED,
  MOVIES_CHANGE_SEARCH,
  MOVIES_CHANGE_STARS,
} = constants;

export const moviesRequest = createAction(MOVIES_REQUEST);
export const moviesFulfilled = createAction(MOVIES_FULFILLED);
export const moviesRejected = createAction(MOVIES_REJECTED);
export const moviesChangeSearch = createAction(MOVIES_CHANGE_SEARCH);
export const moviesChangeStars = createAction(MOVIES_CHANGE_STARS);
