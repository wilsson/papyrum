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