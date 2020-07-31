import config from '../config';

const CATEGORIAS_BASE_URL = `${config.BACKEND_BASE_URL}/categorias`;

const getAll = () => fetch(CATEGORIAS_BASE_URL)
  .then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    }
    throw new Error('Não foi possível pegar os dados');
  });

const getAllWithVideos = () => fetch(`${CATEGORIAS_BASE_URL}?_embed=videos`)
  .then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    }
    throw new Error('Não foi possível pegar os dados');
  });

export default {
  getAll,
  getAllWithVideos,
};
