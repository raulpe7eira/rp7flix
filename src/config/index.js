const BACKEND_BASE_URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'http://blablabla.herokuapp.com';

export default {
  BACKEND_BASE_URL,
};
