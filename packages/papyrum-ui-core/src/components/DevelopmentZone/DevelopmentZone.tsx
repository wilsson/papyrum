import * as React from 'react';
import { LiveProvider, LiveError, LivePreview, LiveEditor } from 'react-live';
import { Wrapper } from './styled';
export const DevelopmentZone = ({ useCase, viewport }) => {
  return(
    <Wrapper>
      <LiveProvider
        code={useCase.code}
        scope={useCase.scope}
      >
        <LivePreview />
        <LiveError />
        <LiveEditor />
      </LiveProvider>
    </Wrapper>
  )
}