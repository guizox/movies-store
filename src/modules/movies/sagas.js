import { takeLatest, put, all, select } from 'redux-saga/effects';
import { isRequestOK } from 'utils/helpers';
import { moviesRequest, moviesFulfilled, moviesRejected, moviesChangeStars } from './actions';
import endpoints, { api } from './endpoints';

function* moviesRequestSaga({ payload }) {
  const {
    movies: { search, selectedStars },
  } = yield select();
  const params = search !== '' ? { query: search } : {};
  const apiToCall = payload && payload.apiToCall ? payload.apiToCall : 'discover';

  try {
    const { status, data } = yield api(apiToCall).get({
      url: endpoints.request(),
      params,
    });

    const orderedList =
      selectedStars > 0
        ? data.results
            .sort((a, b) => b.vote_average - a.vote_average || b.popularity - a.popularity)
            .filter(item => item.vote_average < selectedStars * 2)
        : data.results.sort(
            (a, b) => b.vote_average - a.vote_average || b.popularity - a.popularity,
          );

    return yield isRequestOK(status)
      ? all([put(moviesFulfilled(orderedList))])
      : all([put(moviesRejected())]);
  } catch (responseWithError) {
    return yield responseWithError &&
    responseWithError.response &&
    responseWithError.response.status === 452
      ? put(moviesRejected())
      : all([put(moviesRejected())]);
  }
}

export default [
  takeLatest(moviesRequest, moviesRequestSaga),
  takeLatest(moviesChangeStars, moviesRequestSaga),
];
