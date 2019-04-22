import { css } from 'styled-components';

// @ts-ignore
import * as firacodewoff from '../assets/fonts/firacode-light-webfont.woff2';
// @ts-ignore
import * as firacodewoff2 from '../assets/fonts/firacode-light-webfont.woff';

export const fontFace = css`
  @font-face {
    font-family: 'fira_codelight';
    src: url(${firacodewoff}) format('woff2'),
        url(${firacodewoff2}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;