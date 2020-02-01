import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AStyled } from '../A';
import { Menu } from 'react-feather';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.backgroundHeader};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.darkGray};
  font-size: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  font-weight: 700;
  transition: all .3s ease;
`;

export const WrapperTitle = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.darkGray};
  width: auto;
  height: 32px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const HamburgerIcon = styled(Menu)`
  cursor: pointer;
  margin-right: 10px;
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  margin-right: 10px;
  text-align: center;
  img {
    height: 100%;
    width: auto;
  }
`;

export const HomePageLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.darkGray};
  &:hover {
    color: ${props => props.theme.colors.skyblue}
  }
`;