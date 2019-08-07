import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { contextDB, AStyled } from '@papyrum/ui';
import styled from 'styled-components';

const LinkStyled = styled(NavLink)`
  ${AStyled}
`;

export const Link = ({ to, children }) => {
  const { setRouteActive } = (useContext as any)(contextDB);
  const handleClick = () => {
    setRouteActive(to);
  };

  return (
    <LinkStyled exact to={to} onClick={handleClick}>
      {children}
    </LinkStyled>
  )
};