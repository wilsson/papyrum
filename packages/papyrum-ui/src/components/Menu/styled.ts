import styled, { css } from 'styled-components';

export const MenuWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  cursor: pointer;
  list-style: none;
  padding-left: 24px;
  line-height: 32px;
  margin: 0 15px 5px;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => !props.active && 'rgba(0,0,0,0.1)'};
  }
  ${props => props.active && css`
    background-color: ${props => props.theme.colors.skyblue};
  `}
  a {
    text-decoration: none;
    display: block;
    color: ${props => props.theme.colors.darkGray};
    ${props => props.active && css`
      color:  white;
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
  a {
    padding-left: 20px;
  }
`;

export const HeaderList = styled.a`
  justify-content: space-between;
  svg {
    color: ${props => props.theme.colors.darkGray};
    ${props => props.open && 'transform: rotate(180deg);'}
    transition: all .3s ease;
  }
`;
