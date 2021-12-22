import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routesPaths';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to={routes.index}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routes.discover}>
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routes.topRated}>
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routes.trending}>
              Trending
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routes.wishlist}>
              WishList
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
