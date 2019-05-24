import * as React from 'react'
import styled from 'styled-components';
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

export const Code = ({ children, ...nextProps }) => {
  console.log('_children', nextProps);
  const [ clip, setClip ] = useState(false);
  if(nextProps.className === 'language-bash') {
    return(
      <Wrapper>
        <BashWrapper>
          <Terminal size={15}/>
          <Highlight code={children.trim()} />
        </BashWrapper>
        <CodeBar
        clip={clip}
        handleClipboard={() => {
          copy(children);
          setClip(true);
          setTimeout(() => setClip(false), 200)
        }}
      />
      </Wrapper>
    )
  }

  return(
    <Wrapper>
      <CodeWrapper>
        <Highlight code={children.trim()} />
      </CodeWrapper>
      <CodeBar
        clip={clip}
        handleClipboard={() => {
          copy(children);
          setClip(true);
          setTimeout(() => setClip(false), 200)
        }}
      />
    </Wrapper>
  )
};