import client from '../config/axios';
import movieConfig from '../config/themoviedb';

export const getMovie = id =>
  client.get(`${movieConfig.apiMovie}/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
export const getImages = id =>
  client.get(
    `${movieConfig.apiImages.replace(':id', id)}?api_key=${process.env.REACT_APP_API_KEY}`
  );
export const getDiscover = () =>
  client.get(`${movieConfig.apiDiscover}?api_key=${process.env.REACT_APP_API_KEY}`);
export const getTrending = () =>
  client.get(`${movieConfig.apiTrending}?api_key=${process.env.REACT_APP_API_KEY}`);
export const getTopRated = () =>
  client.get(`${movieConfig.apiTopRated}?api_key=${process.env.REACT_APP_API_KEY}`);
