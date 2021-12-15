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
import clienteAxios from '../../config/axios';

export function downloadMovieAction(){
    return async (dispatch) => {
        dispatch(downloadMovies());

        try {
            const discover = await clienteAxios.get('/discover/movie?api_key=c29a6f5d4aba137c2ae0d35c9801e1cb');            
            const trending = await clienteAxios.get('/trending/movie/week?api_key=c29a6f5d4aba137c2ae0d35c9801e1cb');            
            const toprated = await clienteAxios.get('/movie/top_rated?api_key=c29a6f5d4aba137c2ae0d35c9801e1cb');            

            const movies = {
                trending:trending.data.results,
                discover:discover.data.results,
                toprated:toprated.data.results
            }

            dispatch(downloadMoviesOK(movies));
        } catch (error) {
            dispatch(downloadMoviesError());
        }
    }
}

const downloadMovies = ()=>({
    type:START_DOWNLOAD_MOVIES,
    payload:true
});

const downloadMoviesOK = movies => ({
    type:DOWNLOAD_MOVIES_OK,
    payload: movies
});

const downloadMoviesError = ()=>({
    type:DOWNLOAD_MOVIES_ERROR
});



export function getMovieAction(id){
    return async (dispatch) => {
        dispatch(getMovie(id));

        try {
            const detail = await clienteAxios.get(`/movie/${id}?api_key=c29a6f5d4aba137c2ae0d35c9801e1cb`);                        
            const images = await clienteAxios.get(`/movie/${id}/images?api_key=c29a6f5d4aba137c2ae0d35c9801e1cb`);                        
            
            const movie = {                
                detail:detail.data,
                images:images.data.backdrops.filter(item=>item.width===1920)
            }            

            dispatch(getMovieOK(movie));
        } catch (error) {
            dispatch(getMovieError());
        }
    }
}

const getMovie = ()=>({
    type:START_GET_MOVIE,
    payload:true
});

const getMovieOK = movies => ({
    type:GET_MOVIE_OK,
    payload: movies
});

const getMovieError = ()=>({
    type:GET_MOVIE_ERROR
});

export function addMovieWishlistAction(movie){
    return async (dispatch) => {
        dispatch(addMovieWishlist());
        try {   
                     
            dispatch(addMovieWishlistOK(movie));
            localStorage.setItem('movies',JSON.stringify(movie));
        } catch (error) {
            dispatch(addMovieWishlistError());
        }
    }
}

const addMovieWishlist = ()=>({
    type:START_ADD_MOVIE_WISHLIST,
    payload:true
});

const addMovieWishlistOK = movie => ({
    type:ADD_MOVIE_WISHLIST_OK,
    payload: movie
});

const addMovieWishlistError = ()=>({
    type:ADD_MOVIE_WISHLIST_ERROR
});