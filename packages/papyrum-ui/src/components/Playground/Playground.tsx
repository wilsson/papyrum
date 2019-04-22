import * as React from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { Pre } from '../Code/styled';
import {CodeBar } from '../CodeBar';
import { Editor } from '../Editor';
import copy from 'copy-text-to-clipboard';
const { useState } = React;
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px;
`;

const BoxEditor = styled(Box)`
  border-top: 1px solid #DFDFDF;
`;

export const Playground = ({ code, scope }) => {
  console.log('code', JSON.stringify(code));
  console.log('scope', scope);
  const [ codex, setCodex ] = useState(code);
  const [ clip, setClip ] = useState(false);
  const [ showCode, setShowCode ] = useState(false);
  return(
    <Pre>
      <LiveProvider code={codex} scope={scope}>
        <Box>
          <LivePreview />
          <LiveError />
        </Box>
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
          <BoxEditor>
            <Editor code={codex} setCode={setCodex} />
          </BoxEditor>
        )}
      </LiveProvider>
    </Pre>
  )
};