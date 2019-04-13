import * as React from 'react';
import { Sidebar } from '@papyrum/ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { getAsyncComponents } from './AsyncComponent';
const { Suspense } = React;
import { createGlobalStyle } from 'styled-components';
import { Wrapper } from './styled';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0
    }
`;

export const Root = ({ db, imports }) => {
  const components = getAsyncComponents(imports);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Sidebar entries={db.entries} />
          <div
            className="wrapper"
            style={{
              marginLeft: '240px'
            }}
          >
            <article className="content">
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
            </article>
          </div>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};
