import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>               
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/discover">Discover</Link>               
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/toprated">Top Rated</Link>               
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/trending">Trending</Link>               
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/wishlist">WishList</Link>               
                        </li>                        
                    </ul>                
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;