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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid ${props => props.theme.inner.gray};
  padding: 20px;

  background-color: rgb(255, 255, 255);
  background-image: linear-gradient(
45deg
, rgb(249, 249, 250) 25%, transparent 25%), linear-gradient(
135deg
, rgb(249, 249, 250) 25%, transparent 25%), linear-gradient(
45deg
, transparent 75%, rgb(249, 249, 250) 75%), linear-gradient(
135deg
, transparent 75%, rgb(249, 249, 250) 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
`;

export const EditorWrapper = styled.div`
  position: relative;
  &:hover > ${Copy} {
    opacity: 1;
  }
  margin-bottom: 24px;
`;