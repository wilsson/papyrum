import styled, { css } from 'styled-components';

const font = css`
  color: #5B5B5B;
  margin: 10px 0 20px;
  font-family: "Nunito Sans";
  line-height: 100%;
`;

export const H1 = styled.h1`
  ${font}
  font-size: 48px;
  font-weight: 900;
`;

export const H2 = styled.h2`
  ${font}
  font-size: 36px;
  font-weight: 400;
`;

export const H3 = styled.h3`
  ${font}
  font-size: 32px;
  font-weight: 400;
`;

export const H4 = styled.h4`
  ${font}
  font-size: 28px;
  font-weight: 400;
`;

export const H5 = styled.h5`
  ${font}
  font-size: 24px;
  font-weight: 400;
`;

export const H6 = styled.h6`
  ${font}
  font-size: 20px;
  font-weight: 400;
`;
