import * as React from 'react';
import { useState } from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import {  CodeWrapperStyled } from '@papyrum/ui';
import { CodeBar } from '@papyrum/ui';
import copy from 'copy-text-to-clipboard';
import { getHighlight } from '@papyrum/ui';
import Editor from 'react-simple-code-editor';

import { 
  WrapperLivePreview,
  EditorWrapper
} from './styled';

export const Playground = ({ code, scope }) => {
  const [ codex, setCodex ] = useState(code);
  const [ clip, setClip ] = useState(false);
  const [ showCode, setShowCode ] = useState(false);
  const handleClipboard = () => {
    copy(code);
    setClip(true);
    setTimeout(() => setClip(false), 200);
  };
  const propsEditor = {
    value: codex,
    onValueChange: code => setCodex(code),
    highlight: getHighlight,
    style: {
      fontFamily: 'Fira Code',
      fontSize: 14,
      lineHeight: '24px'
    }
  };
  return(
    <CodeWrapperStyled>
      <LiveProvider code={codex} scope={scope}>
        <WrapperLivePreview>
          <LivePreview />
          <LiveError />
        </WrapperLivePreview>
        <CodeBar
          clip={clip}
          code={true}
          handleShowCode={() => {
            setShowCode(!showCode);
          }}
          handleClipboard={handleClipboard}
        />
        {showCode && (
          <EditorWrapper>
            <Editor {...propsEditor} />
          </EditorWrapper>
        )}
      </LiveProvider>
    </CodeWrapperStyled>
  )
};