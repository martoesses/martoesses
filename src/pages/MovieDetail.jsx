import React,{useEffect} from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction,addMovieWishlistAction } from '../store/actions/moviesAction';
import movieConfig from '../config/themoviedb';
import styled from 'styled-components';

const Genres = styled.div`
    display:inline-block;
    background-color:#CCCCCC;
    margin-right:10px;
    padding:5px;
    border-radius:5px;
`;

const Gallery = styled.img`
    max-width:250px;
    margin-bottom:10px;
    margin-right:5px;
    margin-left:5px;
`;

const WishlistButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #2F80ED;
    color:#FFFFFF;
    border:none;
`;

const MovieDetail = () => {
    let {id} = useParams();
    const dispatch = useDispatch();  
    const movieReducer = useSelector(state=>state.movies);
    const {detail,images} = movieReducer.movie;    

    useEffect(() => {
        dispatch(getMovieAction(id));                
    }, [dispatch,id]);        
    
    return ( 
        <div className="mt-4">
            {!movieReducer.loading && detail && images ? (
                <div>
                    <div className='row'>
                        <div className='col-md-3 offset-md-1'>
                            <img src={`${movieConfig.imgURL}${detail.poster_path}`} alt={detail.title} className="img-fluid" />
                        </div>
                        <div className='col-md-7 offset-md-1'>                        
                            <div className="row">
                                <div className='col-md-9'>
                                    <h1>{detail.title}</h1>
                                </div>
                                <div className='col-md-3'>
                                    <WishlistButton onClick={()=>dispatch(addMovieWishlistAction(detail))}>Add to watchlist</WishlistButton>
                                </div>
                            </div>
                            <p>{detail.overview}</p>
                            <div>
                                {
                                    detail.genres.map(item=>(
                                        <Genres key={item.id}>{item.name}</Genres>
                                    ))
                                }
                            </div>
                            <div className="row mt-5">                                
                                <div className='col-4'>
                                    <h2>IMDB RATING</h2>
                                    <p></p>
                                </div>
                                <div className='col-4'>
                                    <h2>YOUR RATING</h2>
                                    <p></p>
                                </div>
                                <div className='col-4'>
                                    <h2>POPULARITY</h2>
                                    <p></p>
                                </div>                                
                            </div>
                        </div>                    
                    </div>
                    <div className='row mt-5 text-center'>                        
                        {
                            images.map(backdrop=>(                                  
                                <Gallery key={backdrop.file_path} src={`${movieConfig.imgURL}${backdrop.file_path}`} alt={backdrop.file_path}  />                                
                            ))
                        }
                    </div>
                </div>
            ) : (
                <h1>Cargando</h1>
            )}
        </div>
    );
}
 
export default MovieDetail;