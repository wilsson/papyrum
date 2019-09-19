import * as React from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';

interface Props {
  code: string;
  scope: Object;
}

export const DevZone: React.FC<Props> = ({ code, scope }) => {
  return(
    <LiveProvider code={code} scope={scope}>
      <LivePreview />
      <LiveError />
    </LiveProvider>
  )
};