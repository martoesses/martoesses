import React from 'react';

import routesPaths from './constants/routesPaths';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Discover from './pages/Discover';
import Trending from './pages/Trending';
import TopRated from './pages/TopRated';
import MovieDetail from './pages/MovieDetail';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: routesPaths.index,
    component: <Home />,
    exact: true
  },
  {
    path: routesPaths.wishlist,
    component: <WishList />
  },
  {
    path: routesPaths.discover,
    component: <Discover />
  },
  {
    path: routesPaths.trending,
    component: <Trending />
  },
  {
    path: routesPaths.topRated,
    component: <TopRated />
  },
  {
    path: routesPaths.movieDetail,
    component: <MovieDetail />
  },
  {
    component: <NotFoundPage />
  }
];

export default routes;
