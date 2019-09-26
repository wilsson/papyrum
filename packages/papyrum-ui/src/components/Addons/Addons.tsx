import * as React from 'react';
import { useState } from 'react'; 
import Resizable  from 're-resizable';
import Editor from 'react-simple-code-editor';
import { getHighlight } from '@papyrum/ui';
import copy from 'copy-text-to-clipboard';

import {
  TabWrapper,
  TabItem,
  CodeWrapper,
  ClipboardStyled,
  CheckStyled,
  Wrapper
} from './styled';

interface Props {
  code: string,
  setCode(code: string): void;
}

export const Addons: React.FC<Props> = ({ code, setCode }) => {
  const [ height, setHeight ] = useState(400);
  const [ clip, setClip ] = useState(false);
  const handleClipboard = () => {
    copy(code);
    setClip(true);
    setTimeout(() => setClip(false), 200);
  };
  const handleResizable = (e, direction, ref, d) => {
    setHeight(height + d.height);
  };

  const propsEditor = {
    value: code,
    onValueChange: (changeCode: string) => setCode(changeCode),
    highlight: getHighlight,
    style: {
      fontFamily: 'Fira Code',
      fontSize: 14,
      lineHeight: '24px'
    }
  };

  return(
    <Wrapper>
      <Resizable
        minHeight={80}
        maxHeight={600}
        enable={{
          top: true
        }}
        size= {{ width: '100%', height: height }}
        onResizeStop={handleResizable}
      >
        <TabWrapper>
          <TabItem>
            Code
          </TabItem>
        </TabWrapper>
        <CodeWrapper>
          <Editor {...propsEditor} />
        </CodeWrapper>
        {!clip
        ? <ClipboardStyled size="15" color="#A4A4A4" onClick={handleClipboard} />
        : <CheckStyled size="15" color="#A4A4A4" />}
      </Resizable>
    </Wrapper>
  )
};