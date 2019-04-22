import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border-radius: 2px;
  border: none;
  ${(props) => props.danger && css`
    background-color: #e44b4b;
  `}
`;

export const Button = ({ children, ...next }) => (
    <ButtonStyled {...next}>
        {children}
    </ButtonStyled>
)