import styled, { css } from 'styled-components';

const styles = css`
  margin: 0 0 16px;
  padding-left: 16px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: ${props => props.theme.colors.darkGray};
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