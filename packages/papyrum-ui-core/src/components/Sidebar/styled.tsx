import styled, { css } from 'styled-components';
import Resizable  from 're-resizable';

export const Wrapper = styled(Resizable)`
  background-color: #f4f4f4;
  border-right: 1px solid #DBDBDB;
  display: flex;
  flex-direction: column;
  transition: transform .3s ease;
  z-index: 200;
  @media (max-width: 1200px) {
    transform: translateX(-240px);
    ${(props) => props.showMenu && css`
      transform: translateX(0);
    `}
  }
`;

export const ByWrapper = styled.div`
  border-top: 1px solid #DBDBDB;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  flex: 1;
`;

export const Logo = styled.img`
  margin-top: 40px;
  padding-left: 18px;
  margin-bottom: 48px;
`;

export const Shadow = styled.div`
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