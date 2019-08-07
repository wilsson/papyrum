import * as React from 'react';
import HighlightImported, { defaultProps, Prism } from "prism-react-renderer";
import { theme } from './theme';
import { Wrapper } from './styled';

export const Highlight = ({ code }) => (
  <HighlightImported
    {...defaultProps}
    Prism={Prism}
    code={code}
    language="jsx"
    theme={theme as any}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => {
      return(
        <Wrapper>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Wrapper>
      )
    }}
  </HighlightImported>
);

export const getHighlight = (code: string) => <Highlight code={code}/>