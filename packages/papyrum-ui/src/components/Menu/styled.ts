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

const Item = styled.li`
  list-style: none;
  padding-left: 24px;
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

export const ListItem = styled(Item)`
  font-size: 16px;
  font-weight: 700;
  a {
    display: flex;
    align-items: center;
  }
`;

export const SubListItemStyled = styled(Item)`
  font-size: 14px;
  font-weight: 400;
`;

export const Logo = styled.img`
  margin-top: 40px;
  padding-left: 18px;
  margin-bottom: 48px;
`;

export const HeaderList = styled.a`
  justify-content: space-between;
  svg {
    ${props => props.open && 'transform: rotate(180deg);'}
    transition: all .3s ease;
  }
`;
