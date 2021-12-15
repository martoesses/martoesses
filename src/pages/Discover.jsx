import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadMovieAction } from '../store/actions/moviesAction';
import MoviesList from '../components/movies/MoviesList';

const Discover = () => {    
    const dispatch = useDispatch();

    useEffect(() => {
        const getDiscover = () => dispatch(downloadMovieAction());
        getDiscover();
    }, [dispatch]);    

    const {movies,error} = useSelector(state=>state.movies);        

    return (         
        <div className="mt-4">
            <h1>Discover</h1>
            {
                !error && movies ? (
                <MoviesList items={movies.discover} /> 
                ) : (
                    <h1>hay error</h1>
                )
                
            }
        </div>
     );
}
 
export default Discover;