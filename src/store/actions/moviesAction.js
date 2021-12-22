import {
  START_DOWNLOAD_MOVIES,
  DOWNLOAD_MOVIES_OK,
  DOWNLOAD_MOVIES_ERROR,
  START_GET_MOVIE,
  GET_MOVIE_OK,
  GET_MOVIE_ERROR,
  START_ADD_MOVIE_WISHLIST,
  ADD_MOVIE_WISHLIST_OK,
  ADD_MOVIE_WISHLIST_ERROR
} from '../types';
import { getMovie, getImages, getDiscover, getTrending, getTopRated } from '../../api/movies';

const getMovieStart = () => ({
  type: START_GET_MOVIE,
  payload: true
});

const getMovieOK = movies => ({
  type: GET_MOVIE_OK,
  payload: movies
});

const getMovieError = () => ({
  type: GET_MOVIE_ERROR
});

const downloadMovies = () => ({
  type: START_DOWNLOAD_MOVIES,
  payload: true
});

const downloadMoviesOK = movies => ({
  type: DOWNLOAD_MOVIES_OK,
  payload: movies
});

const downloadMoviesError = () => ({
  type: DOWNLOAD_MOVIES_ERROR
});

export function downloadMovieAction() {
  return async dispatch => {
    dispatch(downloadMovies());

    try {
      const discover = await getDiscover();
      const trending = await getTrending();
      const toprated = await getTopRated();

      const movies = {
        trending: trending.data.results,
        discover: discover.data.results,
        toprated: toprated.data.results
      };

      dispatch(downloadMoviesOK(movies));
    } catch (error) {
      dispatch(downloadMoviesError());
    }
  };
}

const addMovieWishlist = () => ({
  type: START_ADD_MOVIE_WISHLIST,
  payload: true
});

const addMovieWishlistOK = movie => ({
  type: ADD_MOVIE_WISHLIST_OK,
  payload: movie
});

const addMovieWishlistError = () => ({
  type: ADD_MOVIE_WISHLIST_ERROR
});

export function getMovieAction(id) {
  return async dispatch => {
    dispatch(getMovieStart(id));

    try {
      const detail = await getMovie(id);
      const images = await getImages(id);

      const movie = {
        detail: detail.data,
        images: images.data.backdrops.filter(item => item.width === 1920)
      };

      dispatch(getMovieOK(movie));
    } catch (error) {
      dispatch(getMovieError());
    }
  };
}

export function addMovieWishlistAction(movie) {
  return async dispatch => {
    dispatch(addMovieWishlist());
    try {
      dispatch(addMovieWishlistOK(movie));
    } catch (error) {
      dispatch(addMovieWishlistError());
    }
  };
}
