import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #F4F4F4;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #DBDBDB;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

export const Link = styled.a`
  padding: 0 20px;
  line-height: 40px;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    color: #00A8FF;
  }
  ${props => props.active && css`
    color: #00A8FF;
  `}
`;

export const LinkMenu = styled.a`
  line-height: 40px;
  display: none;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const LinkAction = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  position: relative;
  svg {
    margin-left: 15px;
    margin-right: 15px;
    color: #5B5B5B;
    transition: all .3s ease;
    ${(props) => props.action === 'zoom-in' && css`
      margin-right: 5px;
    `}
    ${(props) => props.action === 'zoom-out' && css`
      margin-left: 5px;
    `}
  }
  &:hover > svg {
    color: #00A8FF;
  }
`;

export const WrapperActions = styled(Wrapper)`
  justify-content: space-between;
`;

export const Separate = styled.div`
  background-color: #DBDBDB;
  height: 20px;
  width: 1px;
`;
