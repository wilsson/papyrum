import styled from 'styled-components';

export const P = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-family: "Nunito Sans", sans-serif;
  color: ${props => props.theme.content.color};
  margin: 0 0 24px;
`;