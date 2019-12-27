import styled from 'styled-components';
import { Copy } from '@papyrum/ui'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.gray};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 15px 20px;
  color: ${props => props.theme.colors.darkGray};
`;

export const LivePreviewWrapper = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 20px;
`;

export const EditorWrapper = styled.div`
  position: relative;
  &:hover > ${Copy} {
    opacity: 1;
  }
  margin-bottom: 24px;
`;