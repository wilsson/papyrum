import styled, { css } from 'styled-components';
import { Clipboard, Check } from 'react-feather';

export const Wrapper = styled.div`
  position: relative;
`;

export const TabWrapper = styled.div`
  height: 35px;
  min-height: 35px;
  background-color: #F9FAFB;
  border-top: 1px solid #DBDBDB;
  border-bottom: 1px solid #DBDBDB;
  display: flex;
  align-items: center;
`;

export const TabItem = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #5B5B5B;
  padding: 0 15px;
  cursor: pointer;
  ${(props) => props.active && css`
    color: #00A8FF;
  `}
`;

export const CodeWrapper = styled.div`
  padding: 15px;
`;

const iconStyled = css`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 10px;
  cursor: pointer;
`;

export const ClipboardStyled = styled(Clipboard)`
  ${iconStyled}
`;
export const CheckStyled = styled(Check)`
  ${iconStyled}
`;