import * as React from 'react';
import { useState } from 'react';
import HighlightImported, { defaultProps } from 'prism-react-renderer';
import dracula from "prism-react-renderer/themes/dracula";
import { Wrapper, Copy } from './styled';
import copy from 'copy-text-to-clipboard';


interface Props {
  code: string;
}

export const styles = {
  boxSizing: 'border-box',
  fontFamily: 'Fira Code',
  lineHeight: '24px',
  fontSize: '14px',
  ...dracula.plain
};

export const Highlight: React.FC<Props> = ({ code }) => {
  const [ clip, setClip ] = useState(false);

  const handleClipboard = () => {
    copy(code);
    setClip(true);
    setTimeout(() => setClip(false), 400);
  };

  return(
    <HighlightImported
      {...defaultProps}
      code={code}
      language="jsx"
      theme={dracula as any}
    >
      {({ tokens, getLineProps, getTokenProps, style, className }) => {
        return(
          <Wrapper>
            <Copy onClick={handleClipboard}>{clip ? 'Copied' : 'Copy'}</Copy>
            <pre className={className} style={{ ...styles, padding: '20px', borderRadius: '5px', }}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </Wrapper>
        )
      }}
    </HighlightImported>
  )
};