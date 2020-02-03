import styled from 'styled-components';

export const InlineCode = styled.code`
  font-family: "Fira Code";
  background-color: ${props => props.theme.inner.grayLight};
  color: ${props => props.theme.inner.darkGray};
  padding: 0 6px;
  font-size: 16px;
  border-radius: 2px;
`;