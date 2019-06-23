import * as React from 'react'
import copy from 'copy-text-to-clipboard';
import {
  Wrapper,
  BashWrapper,
  CodeWrapper
} from './styled';

import { CodeBar } from '../CodeBar';
import { useState} from 'react';
import { Highlight } from '../Highlight';
import { Terminal } from 'react-feather';

const Bash = ({
  clip,
  onClipboard, 
  children
}) => (
  <Wrapper>
    <BashWrapper>
      <Terminal size={15}/>
      <Highlight code={children.trim()} />
    </BashWrapper>
    <CodeBar
      clip={clip}
      handleClipboard={() => {
        onClipboard();
      }}
    />
  </Wrapper>
);

export const Code = ({ children, ...nextProps }) => {
  const [ clip, setClip ] = useState(false);
  const handleClipboard = () => {
    copy(children);
    setClip(true);
    setTimeout(() => setClip(false), 200);
  };
  if(nextProps.className === 'language-bash') {
    return <Bash clip={clip} onClipboard={handleClipboard} children={children}/>
  }

  return(
    <Wrapper>
      <CodeWrapper>
        <Highlight code={children.trim()} />
      </CodeWrapper>
      <CodeBar
        clip={clip}
        handleClipboard={handleClipboard}
      />
    </Wrapper>
  )
};