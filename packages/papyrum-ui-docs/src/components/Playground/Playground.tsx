import * as React from 'react';
import { useState } from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import copy from 'copy-text-to-clipboard';
import Editor from 'react-simple-code-editor';
import dracula from "prism-react-renderer/themes/dracula";

import HighlightImported, { defaultProps } from 'prism-react-renderer';
import { Copy, styles } from '@papyrum/ui'

import { Wrapper, LivePreviewWrapper, EditorWrapper } from './styled';

export const Playground = ({ code: initialCode, scope }) => {
  const [ code, setCode ] = useState(initialCode);
  const [ clip, setClip ] = useState(false);
  
  const handleClipboard = () => {
    copy(code);
    setClip(true);
    setTimeout(() => setClip(false), 500);
  };

  const highlight = code => (
    <HighlightImported {...defaultProps} theme={dracula as any} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </React.Fragment>
      )}
    </HighlightImported>
  );

  return(
    <LiveProvider code={code} scope={scope}>
      <LivePreviewWrapper>
        <LivePreview />
        <LiveError />
      </LivePreviewWrapper>

      <Wrapper>
        live editor
      </Wrapper>

      <EditorWrapper>
        <Copy onClick={handleClipboard}>{clip ? 'Copied' : 'Copy'}</Copy>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={highlight}
          padding={20}
          style={{ ...styles, borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}
        />
      </EditorWrapper>
    </LiveProvider>
  );
};