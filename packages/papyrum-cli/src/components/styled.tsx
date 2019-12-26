import styled, { css, createGlobalStyle } from 'styled-components';
import { fontFace, } from '@papyrum/ui';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,900&display=swap');

  body {
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    overflow: hidden;
  }
  ${fontFace}
`;

export const BoxProvider = styled.div`
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 40px;
  @media (max-width: 1200px) {
    width: 100vw;
  }
  @media (max-width: 720px) {
    padding: 20px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  transition: transform 0.3s ease 0s;
  height: calc(100vh - 60px);
  @media (max-width: 1200px) {
    transform: translateX(-240px);
  }
  background-color: ${props => props.theme.colors.backgroundArea};
  color: ${props => props.theme.colors.textArea};
  transition: all .3s ease;
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