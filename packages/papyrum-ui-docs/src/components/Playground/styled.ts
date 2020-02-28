import styled from 'styled-components';
import { Copy } from '@papyrum/ui'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.inner.gray};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 15px 20px;
  color: ${props => props.theme.content.color};
`;

export const LivePreviewWrapper = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid ${props => props.theme.inner.gray};
  padding: 20px;
`;

export const EditorWrapper = styled.div`
  position: relative;
  &:hover > ${Copy} {
    opacity: 1;
  }
  margin-bottom: 24px;
`;

export const FullPreviewWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullPreviewCloseWrapper = styled.div`
  position: absolute;
  top: 4%;
  right: 4%;
  width: 30px;
  height: 30px;
  background: #ccc;
  border-radius: 100%;
  cursor: pointer;
`;