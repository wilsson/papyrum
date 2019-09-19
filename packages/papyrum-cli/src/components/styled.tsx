import styled, { css, createGlobalStyle } from 'styled-components';
import { fontFace, } from '@papyrum/ui';

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
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
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