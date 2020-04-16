import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    overflow: hidden;
  }
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
  background-color: ${props => props.theme.content.background};
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