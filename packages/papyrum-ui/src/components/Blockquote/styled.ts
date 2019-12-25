import styled from 'styled-components';

export const Blockquote = styled.div`
  border-left: 5px solid ${props => props.theme.colors.gray};
  padding-left: 20px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.grayLight};
  p {
    padding: 10px 0;
  }
`;