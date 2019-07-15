import styled, { css, createGlobalStyle } from 'styled-components';
import { Menu as MenuIcon, GitHub as GitHubIcon } from 'react-feather';

import {
  fontFace,
} from '@papyrum/ui';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    overflow: hidden;
  }
  ${fontFace}
`;

export const BoxProvider = styled.div`
  padding: 60px;
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 100vw;
  }
  @media (max-width: 720px) {
    padding: 20px;
  }
`;

export const ProviderWrapper = styled.div`
  overflow-y: auto;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;
  transition: transform .3s ease;
  @media (max-width: 1200px) {
    transform: translateX(-240px);
  }
  display: flex;
  flex-direction: column;
`;

export const CenterWrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  @media (max-width: 1200px) {
    justify-content: space-between;
  }
`;

export const IconStyled = css`
  color : #5B5B5B;
  cursor: pointer;
  transition: all .2s ease;
  width: 20px;
  &:hover {
    color: black;
  }
`;

export const GitHubIconStyled = styled(GitHubIcon)`
  ${IconStyled};
  width:  30px;
  height: 30px;
  @media (max-width: 1200px) {
    width:  20px;
    height: 20px;
  }
`;
export const MenuIconStyled = styled(MenuIcon)`
  ${IconStyled};
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;
