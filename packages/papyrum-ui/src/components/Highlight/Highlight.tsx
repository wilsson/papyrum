import * as React from 'react';
import { useState } from 'react';
import HighlightImported, { Language, defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import { Wrapper, Copy } from './styled';
import copy from 'copy-text-to-clipboard';
import { useContext } from 'react';
import { contextDB } from '../Provider';

interface Props {
  code: string;
  language: Language;
}

export const styles = {
  boxSizing: 'border-box',
  fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  lineHeight: '24px',
  fontSize: '14px',
};

export const Highlight: React.FC<Props> = ({ code, language }) => {
  const [ clip, setClip ] = useState(false);
  const { db: { config } } = useContext(contextDB as any);
  const stylesPlain = (config.prism && config.prism.theme.plain) || dracula.plain;

  const handleClipboard = () => {
    copy(code);
    setClip(true);
    setTimeout(() => setClip(false), 400);
  };

  return(
    <HighlightImported
      {...defaultProps}
      code={code}
      language={language}
      theme={(config.prism && config.prism.theme) || dracula as any}
    >
      {({ tokens, getLineProps, getTokenProps, style, className }) => {
        return(
          <Wrapper>
            <Copy onClick={handleClipboard} color={stylesPlain.backgroundColor}>{clip ? 'Copied' : 'Copy'}</Copy>
            <pre className={className} style={{ ...styles as any, ...stylesPlain as any, padding: '20px', borderRadius: '5px', overflow: 'auto' }}>
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