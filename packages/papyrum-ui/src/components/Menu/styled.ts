import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  width: 240px;
  background-color: #f4f4f4;
  height: 100vh;
  position: fixed;
`;

export const MenuWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 16px;
  list-style: none;
  font-weight: 700;
  padding-left: 18px;
  &:hover {
    background-color: ${(props) => !props.active && '#E8E8E8'};
  }
  ${props => props.active && css`
    background-color: #00A8FF;
  `}
  line-height: 32px;
  a {
    text-decoration: none;
    color: #5b5b5b;
    display: block;
    ${props => props.active && css`
      color: white;
    `}
    display: flex;
    align-items: center;
  }
  svg {
    color: #00a8ff;
    ${props => props.active && css`
      color: white;
    `}
    /* width: 20px; */
    width: 15px;
    margin-right: 10px;
  }
`;

export const SubListItemStyled = styled.li`
  font-weight: 400;
  font-size: 14px;
  list-style: none;
  padding-left: 48px;
  line-height: 32px;
  &:hover {
    background-color: ${(props) => !props.active && '#E8E8E8'};
  }
  ${props => props.active && css`
      background-color: #00A8FF; 
    `}
  a {
    text-decoration: none;
    color: #5b5b5b;
    display: block;
    ${props => props.active && css`
      color: white;
    `}
  }
`;

export const Logo = styled.img`
  margin-top: 40px;
  padding-left: 18px;
  margin-bottom: 48px;
`;

export const HeaderList = styled.a`
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  > svg {
    color: #5b5b5b;
    ${props => props.open && 'transform: rotate(180deg);'}
    transition: all .3s ease;
  }
`;
