import * as React from 'react';
import HighlightImported, { defaultProps, Prism } from "prism-react-renderer";
import { theme } from './theme';

export const Highlight = ({ code }) => {
  return (
    <HighlightImported
      {...defaultProps}
      Prism={Prism}
      code={code}
      language="jsx"
      theme={theme as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return(
          <pre
            className="className"
            style={{fontFamily: 'fira_codelight', fontSize: 14, lineHeight: '18px', margin: 0}}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  return (
                    <span {...getTokenProps({ token, key })} />
                  )
                })}
              </div>
            ))}
          </pre>
        )
      }}
    </HighlightImported>
  )
}

export const getHighlight = (code) => {
  return <Highlight code={code}/>
}
/**
 *             <div {...getLineProps({ line, key: i })}>
              {((i+1) !== tokens.length) && line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
 */