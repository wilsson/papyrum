import styled, { css } from 'styled-components';
import Resizable from 're-resizable';

export const CustomResizable = styled(Resizable)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px) !important;
`;

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.grayLight};
  border-right: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  z-index: 200;
  transition: all .3s ease;
  @media (max-width: 1200px) {
    transform: translateX(-240px);
    ${(props) => props.showMenu && css`
      transform: translateX(0);
    `}
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  flex: 1;
  margin-top: 30px;
`;

export const ShadowWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: all .3s ease;
  ${(props) => props.showMenu && css`
    opacity: .3;
    pointer-events: initial;
  `}
`;