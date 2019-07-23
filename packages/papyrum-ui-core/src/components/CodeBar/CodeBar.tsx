import * as React from 'react';
import { Code, Clipboard, Check } from 'react-feather';

import { ToolBarWrapper, Separate, Link } from './styled';

interface Props {
  handleClipboard: Function;
  handleShowCode?: Function;
  clip: boolean;
  code?: boolean;
}
export const CodeBar: React.FC<Props> = ({
  handleClipboard,
  handleShowCode,
  clip,
  code
}) => {
  return(
    <ToolBarWrapper>
      {code && <Link href="">
        <Code href="#" onClick={(e) => {
          e.preventDefault();
          handleShowCode();
        }}/>
      </Link>}
      {code && <Separate />}
      <Link href="#" onClick={(e) => {
        e.preventDefault();
        handleClipboard();
      }}>
      {!clip ? <Clipboard /> : <Check />}
      </Link>
    </ToolBarWrapper>
  )
}