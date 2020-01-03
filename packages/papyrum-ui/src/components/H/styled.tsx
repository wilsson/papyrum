import * as React from 'react';
import styled, { css } from 'styled-components';

const Hash = styled.a`
  color: ${props => props.theme.colors.skyblue};
  text-decoration: none;
  position: absolute;
  left: -22px;
  padding-right: 22px;
  display: none;
`;

const styles = css`
  position: relative;
  font-family: "Nunito Sans", sans-serif;
  color: ${props => props.theme.colors.darkGray};
  font-weight: 700;
  &:hover > ${Hash} {
    display: block;
  }
`;

export const H1 = styled.h1`
  margin: 40px 0 24px;
  ${styles}
  font-size: 48px;
  > code {
    font-size: 48px;
  }
`;

export const H2Styled= styled.h2`
  margin: 40px 0 12px;
  ${styles}
  font-size: 24px;
  > code {
    font-size: 24px;
  }
`;

export const H3Styled = styled.h3`
  margin: 40px 0 12px;
  ${styles}
  font-size: 20px;
  > code {
    font-size: 20px;
  }
`;

export const H4Styled = styled.h4`
  margin: 40px 0 12px;
  ${styles}
  font-size: 16px;
  > code {
    font-size: 16px;
  }
`;

export const H5Styled = styled.h5`
  margin: 40px 0 12px;
  ${styles}
  font-size: 14px;
  > code {
    font-size: 14px;
  }
`;

export const H6Styled = styled.h6`
  margin: 40px 0 12px;
  ${styles}
  font-size: 13.5px;
  > code {
    font-size: 12px;
  }
`;

const buildH = (HStyled, { children, ...nextProps}) => (
  <HStyled {...nextProps}>
    <Hash href={`#${nextProps.id}`}>#</Hash>
    {children}
  </HStyled>
);

export const H2 = props => buildH(H2Styled, props);
export const H3 = props => buildH(H3Styled, props);
export const H4 = props => buildH(H4Styled, props);
export const H5 = props => buildH(H5Styled, props);
export const H6 = props => buildH(H6Styled, props);