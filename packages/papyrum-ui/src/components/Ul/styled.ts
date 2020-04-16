import styled, { css } from 'styled-components';

const styles = css`
  margin: 0 0 16px;
  padding-left: 35px;
  font-size: 16px;
  color: ${props => props.theme.content.color};
  li {
    line-height: 30px;
  }
  ul {
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
`;

export const Ul = styled.ul`${styles}`;
export const Ol = styled.ol`${styles}`;