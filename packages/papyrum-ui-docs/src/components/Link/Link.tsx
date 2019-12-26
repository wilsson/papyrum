import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AStyled } from '@papyrum/ui';
import styled from 'styled-components';

const LinkStyled = styled(NavLink)`
  ${AStyled}
`;

export const Link = ({ to, children }) => {
  return (
    <LinkStyled exact to={to} >
      {children}
    </LinkStyled>
  )
};