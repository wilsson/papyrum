import styled, { css } from 'styled-components';

const styles = css`
  margin: 10px 0 20px;
  padding-left: 16px;
  font-family: "Nunito Sans";
  font-size: 18px;
  color: ${props => props.theme.colors.darkGray};
`;

export const Ul = styled.ul`${styles}`;
export const Ol = styled.ol`${styles}`;