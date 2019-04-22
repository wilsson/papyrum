import * as React from 'react';
import { Sidebar } from '@papyrum/ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/tag';
import { getAsyncComponents } from './AsyncComponent';
const { Suspense } = React;
import styled ,{ createGlobalStyle } from 'styled-components';
import { Wrapper } from './styled';

import { H1, H2, H3, H4, H5, H6, P, Code, Editor, fontFace } from '@papyrum/ui';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Nunito Sans', sans-serif;
        margin: 0;
    }
    ${fontFace}
`;

const BoxProvider = styled.div`
  margin-left: 240px;
`;

const Box = styled.div`
  padding: 60px;
  width: 1200px;
`;

const c = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  wrapper: BoxProvider,
  code: Code
}

export const Root = ({ db, imports }) => {
  const components = getAsyncComponents(imports);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Sidebar entries={db.entries} />
          <MDXProvider components={c}>
            <Box>
                <Suspense fallback={<div>Loading...</div>}>
                  {Object.keys(db.plain).map((entry, i) => (
                  <Route
                    key={i}
                    exact
                    path={db.plain[entry].route}
                    component={components[i]}
                  />
                ))}
              </Suspense>
            </Box>
          </MDXProvider>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};
