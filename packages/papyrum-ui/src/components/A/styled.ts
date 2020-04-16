import styled, { css } from 'styled-components';

export const styles = css`
  color: ${props => props.theme.inner.skyblue};
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

export const A =styled.a`
  ${styles}
  > code {
    color: ${props => props.theme.inner.skyblue};
  }
`;