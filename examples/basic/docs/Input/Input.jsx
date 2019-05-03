import styled, { css } from 'styled-components';

export const Input = styled.input`
  border-radius: 2px;
  border: none;
  border: 1px solid black;
  padding: 10px 15px;
  outline: none;
  ${(props) => props.error && css`
    border: 1px solid red;
  `}
`;