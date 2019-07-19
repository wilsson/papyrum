import * as React from 'react';
import { useState, Suspense } from 'react';
import { Sidebar, Provider } from '@papyrum/ui';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/tag';
import { getAsyncComponents } from './AsyncComponent';
import { Wrapper } from './styled';

import {
  GlobalStyle,
  BoxProvider,
  ProviderWrapper,
  ContentWrapper,
  CenterWrapper,
  Menu,
  MenuIconStyled,
  GitHubIconStyled
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
  inlineCode: components.InlineCode,
  img: components.Img
};

const NoMatch = () => <CenterWrapper>Not Found</CenterWrapper>

export const Root = ({ db, imports }) => {
  const { pathname } = location;
  const componentsAsync = getAsyncComponents(imports);
  const [ showMenu, setShowMenu ] = useState(false);
  const [ routeActive, setRouteActive ] = useState(pathname);
  const props = {
    db: db,
    setRouteActive,
    routeActive
  };
  return (
    <Provider {...props} >
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Shadow showMenu={showMenu} onClick={() => setShowMenu(!showMenu) }/>
          <Sidebar entries={db.entries} showMenu={showMenu} />
          <ContentWrapper showMenu={showMenu}>
          <Menu>
            <MenuIconStyled onClick={() => setShowMenu(!showMenu) }/>
            {db.config.homepage && (
              <a href={db.config.homepage} target="_blank" >
                <GitHubIconStyled />
              </a>
            )}
          </Menu>
            <ProviderWrapper>
              <MDXProvider components={providerComponents}>
                <Suspense fallback={<CenterWrapper>Loading...</CenterWrapper>}>
                  <Switch>
                    {Object.keys(db.plain).map((entry, i) => (
                      <Route
                        key={i}
                        exact
                        path={db.plain[entry].route}
                        component={componentsAsync[i]}
                      />
                    ))}
                    <Route component={NoMatch} />
                  </Switch>
                </Suspense>
              </MDXProvider>
            </ProviderWrapper>
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
};