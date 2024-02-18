import ky from 'ky';

const apiURL = 'https://rickandmortyapi.com/api';
const api = ky.create({
  prefixUrl: apiURL,
});

export default api;
