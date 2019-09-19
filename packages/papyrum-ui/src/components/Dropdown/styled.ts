import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  padding: 5px 0;
  list-style: none;
  li {
    padding: 0 10px;
    font-size: 14px;
    color: #5B5B5B;
    line-height: 25px;
    transition: all .2s ease;
    &:hover {
      background-color: #F4F4F4;
    }
  }
`;
export const Wrapper = styled.div`
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  position: absolute;
  top: 30px;
  left: -25%;
  width: max-content;
  filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 5px 5px) drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 3px);
`;
export const Triangle = styled.div`
  position: absolute;
  border-top: 10px solid transparent;
  border-bottom: 10px solid white;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  width: 0;
  height: 0;
  top: -20px;
  left: 25%;
`;