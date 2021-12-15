import React from 'react';
import { Route } from 'react-router-dom';
import { node } from 'prop-types';

const RouteFromPath = ({ component, ...route }) =>(
    <Route {...route} element={component} />
  );

RouteFromPath.propTypes = {
  component: node.isRequired
};

export default RouteFromPath;
