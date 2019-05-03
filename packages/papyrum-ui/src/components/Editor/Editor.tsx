import * as React from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2'
import * as PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { memo } from 'react';
import { theme } from './styled';

const CodeMirrorStyled = styled(CodeMirror)`
  ${theme}
  .CodeMirror {
    height: 100%;
  }

  .CodeMirror pre {
    font-size: 14px;
  }
  .CodeMirror-line {
    line-height: 20px;
  }
  .CodeMirror pre {
    font-family: 'fira_codelight';
  }
`;

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx'

interface Props {
  code: string;
  setCode?: Function;
  readonly?: boolean;
}

const Scrollbar = styled(PerfectScrollbar)`
  overflow: auto;
  position: relative;
  max-height: ${p => 25 * p.lines}px;
  .ps__rail-y {
    z-index: 9;
    opacity: 0.4;
  }
`;

export const EditorNo: React.FC<Props> = ({ code, setCode, readonly }) => {
  console.log('render editor');
  const options = {
    mode: 'jsx',
    lineNumbers: true,
    theme: 'papyrum'
  };
  const handleChange = (editor, data, value: string) => {
    !readonly && setCode(value);
  };
  return(
    <Scrollbar lines={14}>
      <CodeMirrorStyled
        value={code}
        options={options}
        onBeforeChange={handleChange}
      />
    </Scrollbar>
  )
}

export const Editor = memo(EditorNo, (prev, next) => {
  console.log('MEMO', prev, next);
  return false;
});