import config from '../config';

const VIDEOS_BASE_URL = `${config.BACKEND_BASE_URL}/videos`;

const create = (video) => fetch(VIDEOS_BASE_URL, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(video),
})
  .then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    }
    throw new Error('Não foi possível pegar os vídeos');
  });

const getAll = () => fetch(VIDEOS_BASE_URL)
  .then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    }
    throw new Error('Não foi possível pegar os vídeos');
  });

export default {
  getAll,
  create,
};
