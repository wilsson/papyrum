import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AStyled } from '@papyrum/ui';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeRoute } from '@papyrum/ui';

const LinkStyled = styled(NavLink)`
  ${AStyled}
`;

const Link = ({ to, children, handleChangeRoute }) => {
  return (
    <LinkStyled exact to={to} onClick={() => handleChangeRoute(to)}>
      {children}
    </LinkStyled>
  )
};

const mapDispatchToProps = (dispatch) => ({
  handleChangeRoute: (route) => {
    dispatch(changeRoute(route));
  }
});

const LinkHoc = connect(null, mapDispatchToProps)(Link);

export { LinkHoc as Link };