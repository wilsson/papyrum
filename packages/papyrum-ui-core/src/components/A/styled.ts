import styled, { css } from 'styled-components';

export const styles = css`
  color: #039BE5;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

export const A =styled.a`
  ${styles}
`;