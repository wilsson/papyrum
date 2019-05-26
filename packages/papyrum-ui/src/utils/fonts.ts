import { css } from 'styled-components';

// @ts-ignore
import * as firacodewoff from '../assets/fonts/FiraCode-Regular.woff2';
// @ts-ignore
import * as firacodewoff2 from '../assets/fonts/FiraCode-Regular.woff';

export const fontFace = css`
  @font-face {
    font-family: "Fira Code";
    src: url(${firacodewoff}) format("woff2"),
      url(${firacodewoff2}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;