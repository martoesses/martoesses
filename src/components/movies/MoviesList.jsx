import React from 'react'
import Movie from './Movie';

const MoviesList = ({items}) => {
    return ( 
        <div className="row">
            {
                (items.length > 0) ? (
                    items.map(item=>(
                        <div className="col-md-3">
                            <Movie 
                                key={item.id} 
                                item={item} 
                            />
                        </div>
                    ))
                ) : (
                    <h1>No hay ningun Resultado</h1>
                )
            }
        </div>
     );
}
 
export default MoviesList;