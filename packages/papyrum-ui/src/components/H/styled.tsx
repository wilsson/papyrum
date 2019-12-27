import styled, { css } from 'styled-components';

const font = css`

  font-family: "Nunito Sans", sans-serif;
  color: ${props => props.theme.colors.darkGray};
`;

export const H1 = styled.h1`
  margin: 40px 0 24px;
  ${font}
  font-size: 48px;
  font-weight: 700;
  line-height: 65px;
`;

export const H2 = styled.h2`
  margin: 40px 0 12px;
  ${font}
  font-size: 40px;
  font-weight: 700;
`;

export const H3 = styled.h3`
  margin: 40px 0 12px;
  ${font}
  font-size: 32px;
  font-weight: 700;
`;

export const H4 = styled.h4`
  margin: 40px 0 12px;
  ${font}
  font-size: 24px;
  font-weight: 700;
`;

export const H5 = styled.h5`
  margin: 40px 0 12px;
  ${font}
  font-size: 20px;
  font-weight: 700;
`;

export const H6 = styled.h6`
  margin: 40px 0 12px;
  ${font}
  font-size: 18px;
  font-weight: 700;
`;
