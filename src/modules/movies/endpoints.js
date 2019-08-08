import Apis from 'apis';

const uris = {
  discover: `https://api.themoviedb.org/3/discover/movie?api_key=${
    process.env.REACT_APP_API_KEY
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=70b6b13f5c1f91391846761c27a6e7bf&language=en-US&page=1&include_adult=false`,
};

export const api = (apiToCall = 'discover') => Apis({ baseURL: uris[apiToCall] });

export default {
  request: (page = 1) => `&page=${page}`,
};
