import * as React from 'react'
import styled from 'styled-components';
import copy from 'copy-text-to-clipboard';
import {Wrapper } from './styled';
import { CodeBar } from '../CodeBar';
import { useState} from 'react';
import { Highlight } from '../Highlight';

const Box = styled.div`
  padding: 20px;
`;

export const Code = ({ children }) => {
  const [ clip, setClip ] = useState(false);
  return(
    <Wrapper>
      <Box>
        <Highlight code={children.trim()} />
      </Box>
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