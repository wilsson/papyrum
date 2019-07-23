import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  background: white;
  margin: 0;
  padding: 0;
  width: max-content;
  list-style: none;
  top: 50px;
  left: -50%;
  filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 5px 5px) drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 3px);
  border-radius: 2px;
  z-index: 100;
`;

export const Item = styled.li`
  line-height: 30px;
  font-size: 14px;
  padding: 0 10px;
  box-sizing: border-box;
  color: #5B5B5B;
  &:hover {
    background-color: #F4F4F4;
  }
`;

export const Symbol = styled.span`
  color: #7AD894;
  border: 1px solid #7AD894;
  padding: 0 5px;
  margin-right: 5px;
  border-radius: 2px;
`;

export const Arrow = styled.div`
  position: absolute;
  margin-bottom: 8px;
  margin-top: 0px;
  margin-right: 8px;
  margin-left: 15px;
  top: -8px;
  left: 28px;
  border-bottom-width: 8px;
  border-top-width: 0px;
  border-right-width: 8px;
  border-left-width: 8px;
  border-top-color: transparent;
  border-bottom-color: rgba(255, 255, 255, 0.95);
  border-left-color: transparent;
  border-right-color: transparent;
  border-style: solid;
`;