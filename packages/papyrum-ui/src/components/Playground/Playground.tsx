import * as React from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { Wrapper } from '../Code/styled';
import { CodeBar } from '../CodeBar';
import copy from 'copy-text-to-clipboard';
const { useState, useContext} = React;
import styled from 'styled-components';
import { getHighlight } from '../Highlight';
import Editor from 'react-simple-code-editor';

const Box = styled.div`
  padding: 15px;
`;

const BoxEditor = styled(Box)`
  border-top: 1px solid #DFDFDF;
`;

const inCode = (param, code: string) => {
  let valid = Object.values(param)
    .filter((usecase: any) => usecase.code === code );
  return !!valid.length;
};

export const Playground = ({ code, scope, ...nextProps }) => {
  //const data: any = useContext(context);
  const [ codex, setCodex ] = useState(code);
  const [ clip, setClip ] = useState(false);
  const [ showCode, setShowCode ] = useState(false);
  /*if(nextProps.name
    && data.cases[location.pathname]
    && !inCode(data.cases[location.pathname], code)
  ) {
    data.handle(code, scope, nextProps.name);
  }*/
  /*const getCode = code => {
    return(
        <Highlight
        Prism={Prism}
        code={code}
        theme={theme as any}
        language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
    )
  }*/
  return(
    <Wrapper>
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
            <Editor
              value={codex}
              onValueChange={code => setCodex(code)}
              highlight={getHighlight}
              style={{
                fontFamily: 'fira_codelight',
                fontSize: 14,
                lineHeight: '18px'
              }}
            />
          </BoxEditor>
        )}
      </LiveProvider>
    </Wrapper>
  )
};