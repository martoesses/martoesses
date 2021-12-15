import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadMovieAction } from '../store/actions/moviesAction';
import MoviesList from '../components/movies/MoviesList';

const TopRated = () => {    
    const dispatch = useDispatch();

    useEffect(() => {
        const getTopRated = () => dispatch(downloadMovieAction());
        getTopRated();
    }, [dispatch]);    

    const {movies,error} = useSelector(state=>state.movies);

    return (         
        <div className="mt-4">
            <h1>Top Rated</h1>
            {
                !error ? (
                <MoviesList items={movies.toprated} /> 
                ) : (
                    <h1>hay error</h1>
                )
                
            }
        </div>
     );
}
 
export default TopRated;