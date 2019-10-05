import * as React from 'react';
import HighlightImported, { defaultProps, Prism } from "prism-react-renderer";
import * as lightTheme from "prism-react-renderer/themes/duotoneLight";
import * as darkTheme from "prism-react-renderer/themes/duotoneDark";
import { Wrapper } from './styled';

interface Props {
  code: string;
  isDark?: boolean;
}
export const Highlight = ({ code, isDark }:Props) => (
  <HighlightImported
    {...defaultProps}
    Prism={Prism}
    code={code}
    language="jsx"
    theme={isDark ? darkTheme as any : lightTheme as any}
  >
    {({ tokens, getLineProps, getTokenProps }) => {
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