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

const initialState = {
    movies: {
        trending:[],
        discover:[],
        toprated:[],        
    },
    wishlist:[],
    movie:{
        detail:null,
        images:null
    },
    error: null,
    loading: false    
}

const moviesReducer = (state = initialState,action)=>{
    switch(action.type){        
        case START_ADD_MOVIE_WISHLIST:
        case START_DOWNLOAD_MOVIES:
        case START_GET_MOVIE:            
            return {
                ...state,
                loading:action.payload   
            }        
        case DOWNLOAD_MOVIES_OK:
            return{
                ...state,
                loading:false,
                error:null,
                movies:action.payload
            }
        case GET_MOVIE_OK:            
            return{
               ...state,
               loading:false,
               error:null,
               movie: action.payload 
            }    
        case ADD_MOVIE_WISHLIST_OK:            
            return{
               ...state,
               loading:false,
               error:null,
               wishlist: [...state.wishlist,action.payload]
            }    
        case GET_MOVIE_ERROR:    
        case DOWNLOAD_MOVIES_ERROR:                    
        case ADD_MOVIE_WISHLIST_ERROR:
            return{
                ...state,
                loading:false,
                error:true
            }        
        default:
            return state;
    }
}

export default moviesReducer;