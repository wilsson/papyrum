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
    background-color: ${props => props.theme.primary};
  `}
  a {
    text-decoration: none;
    display: block;
    color: ${props => props.theme.sidebar.color};
    ${props => props.active && css`
      color:  ${props.theme.sidebar.activeItem};
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
    color: ${props => props.theme.sidebar.color};
    ${props => props.open && 'transform: rotate(180deg);'}
    transition: all .3s ease;
  }
`;

export const HeadingWrapper = styled.div`
  padding-left: 59px;
  ${props => props.type === 'sub' && css`
    padding-left: 69px;
  ` }
  margin: 10px 0;
`;

export const ItemHeading = styled.a`
  text-decoration: none;
  color: ${props => props.theme.sidebar.color};
  font-size: 14px;
  position: relative;
  display: block;
  margin-top: 8px;
  &:first-child {
    margin-top: 0;
  }

  ${props => props.active && css`
    &:before {
      content: '';
      position: absolute;
      width: 2px;
      border-radius: 1px;
      height: 20px;
      left: -2px;
      top: 0px;
      background-color: ${props => props.theme.primary};
    }
  `}
  padding-left: 10px;
`;