import styled from 'styled-components';

export const Button = styled.button`
  background-color: #5091e9;
  color: white;
  border: none;
  padding: 10px 15px;
  ${(props) => props.danger && `
    background-color: red;
  `}
`;