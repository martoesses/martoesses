import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadMovieAction } from '../store/actions/moviesAction';
import MoviesList from '../components/movies/MoviesList';

const Trending = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrending = () => dispatch(downloadMovieAction());
    getTrending();
  }, [dispatch]);

  const { movies, error } = useSelector(state => state.movies);

  return (
    <div className="mt-4">
      <h1>Trending</h1>
      {!error ? <MoviesList items={movies.trending} /> : <h1>Not results</h1>}
    </div>
  );
};

export default Trending;
