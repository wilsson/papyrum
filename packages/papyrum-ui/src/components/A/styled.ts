import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const styles = css`
  color: ${props => darken(.2, props.theme.primary)};
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
    color: ${props => darken(.2, props.theme.primary)};
  }
`;