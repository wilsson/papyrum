import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #F9FAFB;
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

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  padding: 0 20px;
  overflow-wrap: break-word;
  color: #5B5B5B;
`;

export const WrapperButtonSun = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`;

export const ButtonSun = styled.div`
  width: 30px;
  height: 30px;
  background-color: #EEEEEE;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;