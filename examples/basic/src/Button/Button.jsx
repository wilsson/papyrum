import React from 'react';
import p from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #4756e6;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 2px;
  cursor: pointer;
  transition: .2s ease all;
  &:hover {
    background-color: #6a76ef;
  }
  ${props => props.outline && css`
    border: 2px solid #4756e6;
    background-color: white;
    color: #4756e6;
    &:hover {
      background-color: #6a76ef;
      color: white;
    }
  `}
`;

export const Button = ({ children, outline }) => (
  <ButtonStyled outline={outline}>{children}</ButtonStyled>
);

Button.propTypes = {
  outline: p.bool,
  disabled: p.bool,
  /** My description for loading prop */
  loading: p.bool,
  variants: p.oneOf(['primary', 'secondary'])
};