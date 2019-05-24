import * as React from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { Wrapper } from '../Code/styled';
import { CodeBar } from '../CodeBar';
import copy from 'copy-text-to-clipboard';
const { useState, useContext} = React;
import styled from 'styled-components';
import { getHighlight } from '../Highlight';
import Editor from 'react-simple-code-editor';
import { 
  WrapperLivePreview,
  EditorWrapper
} from './styled';

export const Playground = ({ code, scope, ...nextProps }) => {

  const [ codex, setCodex ] = useState(code);
  const [ clip, setClip ] = useState(false);
  const [ showCode, setShowCode ] = useState(false);

  return(
    <Wrapper>
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
          handleClipboard={() => {
            copy(code);
            setClip(true);
            setTimeout(() => setClip(false), 200)
          }}
        />
        {showCode && (
          <EditorWrapper>
            <Editor
              value={codex}
              onValueChange={code => setCodex(code)}
              highlight={getHighlight}
              style={{
                fontFamily: 'Operator Mono',
                fontSize: 13,
                lineHeight: '18px'
              }}
            />
          </EditorWrapper>
        )}
      </LiveProvider>
    </Wrapper>
  )
};