import React, { useState } from 'react';
import p from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  border-radius: 5px;
  font-family: "Fira";
  margin: 0 5px;
  box-sizing: border-box;
  background-color: #4756e6;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  transition: .2s ease all;
  &:hover {
    background-color: #3d49c2;
  }
  outline: none;
`;

export const Button = ({ children, outline, variant, loading }) => {
  const [counter, setCounter] = useState(0)
  return(
    <>
      <ButtonStyled variant={variant} outline={outline} onClick={() => setCounter(counter + 1)}>
        {loading ? 'loading...' : children}
      </ButtonStyled>
    </>
  );
}

Button.propTypes = {
  outline: p.bool,
  disabled: p.bool,
  /** Property to display loading */
  loading: p.bool,
  variant: p.oneOf(['primary', 'danger']),
};

Button.defaultProps = {
  disabled: true
};