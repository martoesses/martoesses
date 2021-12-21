import React,{useContext} from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Movie from './movies/Movie';
import styled from 'styled-components';

const ContainerItem = styled.div`
  width:200px;
  margin-right:15px;
`;

const LeftButton = styled.button`
  margin-right:10px;
  background: transparent;
  border:0px;
  position:absolute;
  left:0px;
  z-index:9999;
`;

const RightButton = styled.button`
  margin-left:10px;
  background: transparent;
  border:0px;
  position:absolute;
  right:0px;
  z-index:9999;
  background-color:#CCCCCC;
  border-radius:10px;
  width:30px;
  height:30px;
`;

const HorizontalScrollNav = ({items}) =>  ( 
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map((item) => (
            <ContainerItem
              itemId={item.id}
              key={item.id}              
              tabIndex={0}
            >
              <Movie 
                item={item}                
              />
            </ContainerItem>
        ))}
        </ScrollMenu>
    )

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  
    return (
      <LeftButton disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        left
      </LeftButton>
    );
}
  
function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  
    return (
      <RightButton disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </RightButton>
    );
}
 
export default HorizontalScrollNav;