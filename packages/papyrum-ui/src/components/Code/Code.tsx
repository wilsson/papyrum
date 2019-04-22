import * as React from 'react'
import styled from 'styled-components';
import copy from 'copy-text-to-clipboard';
import { Pre } from './styled';
import { Editor } from '../Editor';
import { CodeBar } from '../CodeBar';

const { useState } = React;

const Box = styled.div`
  padding: 20px;
`;

export const Code = ({ children, className }) => {
  const [ clip, setClip ] = useState(false);
  console.log('children', JSON.stringify(children.replace(/\\n$/gm, '')));
  return(
    <Pre>
      <Box>
        <Editor code={children} readonly />
      </Box>
      <CodeBar
        clip={clip}
        handleClipboard={() => {
          copy(children);
          setClip(true);
          setTimeout(() => setClip(false), 200)
        }}
      />
    </Pre>
  )
};