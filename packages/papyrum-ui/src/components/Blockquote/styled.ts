import styled from 'styled-components';

export const Blockquote = styled.div`
  margin: 20px 0 40px;
  border-left: 5px solid ${props => props.theme.inner.gray};
  padding-left: 20px;
  box-sizing: border-box;
  background: ${props => props.theme.inner.grayLight};
  p {
    padding: 10px 0;
  }
`;