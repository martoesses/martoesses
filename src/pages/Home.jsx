import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import HorizontalScrollNav from '../components/HorizontalScrollNav/HorizontalScrollNav';
import { downloadMovieAction } from '../store/actions/moviesAction';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDiscover = () => dispatch(downloadMovieAction());
    getDiscover();
  }, [dispatch]);

  const movies = useSelector(state => state.movies.movies);

  return (
    <div className="mt-4">
      <Tabs>
        <TabList>
          <Tab>Trending</Tab>
          <Tab>Discover</Tab>
          <Tab>Top Rated</Tab>
        </TabList>
        <TabPanel>
          <HorizontalScrollNav items={movies.trending} />
        </TabPanel>
        <TabPanel>
          <HorizontalScrollNav items={movies.discover} />
        </TabPanel>
        <TabPanel>
          <HorizontalScrollNav items={movies.toprated} />
        </TabPanel>
      </Tabs>

      <h1>Watchlist</h1>
      <HorizontalScrollNav items={movies.discover} />
    </div>
  );
};

export default Home;
