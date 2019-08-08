import axios from 'axios';

export const TOKEN_TYPE = 'bearer';

const axiosErrorsInterceptor = (req = {}) => {
  if (!req.response) {
    return Promise.reject(new Error({ ...req, response: {} }));
  }
  return Promise.reject(req);
};

const request = params => {
  axios.interceptors.response.use(response => response, axiosErrorsInterceptor);
  return axios(params);
};

export default ({ baseURL }) => ({
  get: props =>
    request({
      baseURL,
      ...props,
      method: 'GET',
    }),
  post: props =>
    request({
      baseURL,
      ...props,
      method: 'POST',
    }),
  put: props =>
    request({
      baseURL,
      ...props,
      method: 'PUT',
    }),
  patch: props =>
    request({
      baseURL,
      ...props,
      method: 'PATCH',
    }),
  delete: props =>
    request({
      baseURL,
      ...props,
      method: 'DELETE',
    }),
});
