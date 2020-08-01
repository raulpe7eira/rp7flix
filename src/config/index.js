const BACKEND_BASE_URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://rp7flix.herokuapp.com';

export default {
  BACKEND_BASE_URL,
};
