import React from 'react';
import p from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  font-family: "Fira";
  margin: 0 5px;
  box-sizing: border-box;
  background-color: #3c3c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 2px;
  cursor: pointer;
  transition: .2s ease all;
  &:hover {
    background-color: #6d6d6d;
  }
  ${props => props.outline && css`
    border: 2px solid #3c3c3c;
    background-color: white;
    color: #3c3c3c;
    &:hover {
      background-color: #3c3c3c;
      color: white;
    }
  `}

  ${props => props.outline && props.variant === 'primary' && css`
    border: 2px solid #4756e6;
    background-color: white;
    color: #4756e6;
    &:hover {
      background-color: #4756e6;
      color: white;
    }
  `}

  ${props => props.outline && props.variant === 'danger' && css`
    border: 2px solid #ff5858;
    background-color: white;
    color: #ff5858;
    &:hover {
      background-color: #ff5858;
      color: white;
    }
  `}

  ${props => !props.outline && props.variant === 'primary' && css`
    background-color: #4756e6;
    color: white;
  `}
  ${props => !props.outline && props.variant === 'danger' && css`
    background-color: #ff5858;
    color: white;
    &:hover {
      background-color: #ff8585;
      color: white;
    }
  `}
`;

const Button = ({ children, outline, variant }) => (
  <ButtonStyled variant={variant} outline={outline}>{children}</ButtonStyled>
);

Button.propTypes = {
  outline: p.bool.isRequired,
  disabled: p.bool,
  /** My description for prop */
  loading: p.bool,
  variant: p.oneOf(['primary', 'danger']),
};

Button.defaultProps = {
  disabled: true
}

export default Button;