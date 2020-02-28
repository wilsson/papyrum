import * as React from 'react';
import * as ReactDOM from "react-dom";
import { FullPreviewWrapper, FullPreviewCloseWrapper } from './styled';

export const FullPreview = ({ onClose, children }) => {

  return ReactDOM.createPortal(
    <FullPreviewWrapper>
      <FullPreviewCloseWrapper onClick={() => onClose && onClose()} />
      {children}
    </FullPreviewWrapper>,
    document.body
  )
}