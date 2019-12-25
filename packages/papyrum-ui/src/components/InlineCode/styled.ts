import styled from 'styled-components';

export const InlineCode = styled.span`
  font-family: "Fira Code";
  background-color: ${props => props.theme.colors.grayLight};
  color: ${props => props.theme.colors.darkGray};
  padding: 0 6px;
  font-size: 16px;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.gray}
`;