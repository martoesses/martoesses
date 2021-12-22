import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Movie from '../movies/Movie';
import Arrow from './Arrow';

const ContainerItem = styled.div`
  width: 200px;
  margin-right: 15px;
`;

const HorizontalScrollNav = ({ items }) => (
  <ScrollMenu LeftArrow={() => Arrow('Left')} RightArrow={() => Arrow('Right')}>
    {items.map(item => (
      <ContainerItem itemId={item.id} key={item.id} tabIndex={0}>
        <Movie item={item} />
      </ContainerItem>
    ))}
  </ScrollMenu>
);

HorizontalScrollNav.propTypes = {
  items: PropTypes.element.isRequired
};

export default HorizontalScrollNav;
