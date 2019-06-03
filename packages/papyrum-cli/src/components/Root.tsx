import * as React from 'react';
import { useState, Suspense } from 'react';
import { Sidebar } from '@papyrum/ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/tag';
import { getAsyncComponents } from './AsyncComponent';
import { Wrapper } from './styled';
import { contextDB } from '../contexts/db';

import {
  GlobalStyle,
  BoxProvider,
  ProviderWrapper,
  ContentWrapper,
  Loader
} from './styled';

import {
  components,
  Shadow
} from '@papyrum/ui';

const providerComponents = {
  h1: components.H1,
  h2: components.H2,
  h3: components.H3,
  h4: components.H4,
  h5: components.H5,
  h6: components.H6,
  p: components.P,
  pre: props => <div {...props} />,
  wrapper: BoxProvider,
  code: components.Code,
  ul: components.Ul,
  ol: components.Ol,
  a: components.A,
  blockquote: components.Blockquote,
  table: components.Table,
  tr: components.TableRow,
  td: components.TableTd,
  th: components.TableTh,
  inlineCode: components.InlineCode
};

export const Root = ({ db, imports }) => {
  console.log('render root');
  const componentsAsync = getAsyncComponents(imports);
  const [ showMenu, setShowMenu ] = useState(false);
  const [ routeActive, setRouteActive ] = useState('');
  return (
    <contextDB.Provider value={{
      db: db,
      handleActive: (route) => {
        console.log('active route ', route);
        setRouteActive(route);
      },
      routeActive
    }}
      >
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Shadow showMenu={showMenu} onClick={() => setShowMenu(!showMenu) }/>
          <Sidebar entries={db.entries} showMenu={showMenu} />
          <ContentWrapper showMenu={showMenu}>
            <ProviderWrapper>
              <MDXProvider components={providerComponents}>
                <Suspense fallback={<Loader>Loading...</Loader>}>
                  {Object.keys(db.plain).map((entry, i) => (
                    <Route
                      key={i}
                      exact
                      path={db.plain[entry].route}
                      component={componentsAsync[i]}
                    />
                  ))}
                </Suspense>
              </MDXProvider>
            </ProviderWrapper>
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    </contextDB.Provider>
  );
};