import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MoviesList = ({ items }) => (
  <div className="row">
    {items.length > 0 ? (
      items.map(item => (
        <div key={item.id} className="col-md-3">
          <Movie key={item.id} item={item} />
        </div>
      ))
    ) : (
      <h1>Not results</h1>
    )}
  </div>
);

MoviesList.propTypes = {
  items: PropTypes.element.isRequired
};

export default MoviesList;
