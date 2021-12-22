import React, { useContext } from 'react';
import styled from 'styled-components';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const LeftButton = styled.button`
  margin-right: 10px;
  background: transparent;
  border: 0px;
  position: absolute;
  left: 0px;
  z-index: 9999;
`;

const RightButton = styled.button`
  margin-left: 10px;
  background: transparent;
  border: 0px;
  position: absolute;
  right: 0px;
  z-index: 9999;
  background-color: #cccccc;
  border-radius: 10px;
  width: 30px;
  height: 30px;
`;

const Arrow = direction => {
  const { isFirstItemVisible, isLastItemVisible, scrollNext, scrollPrev } = useContext(
    VisibilityContext
  );

  return direction === 'Right' ? (
    <RightButton disabled={isLastItemVisible} onClick={() => scrollNext()}>
      {direction}
    </RightButton>
  ) : (
    <LeftButton disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      {direction}
    </LeftButton>
  );
};

export default Arrow;
