import * as React from 'react';
import { useState, Suspense } from 'react';
import { hot } from 'react-hot-loader';

import {
  Sidebar,
  Provider,
  stateForComponentState,
  Toolbar,
  DevZone,
  components,
  Shadow,
  Addons
} from '@papyrum/ui';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/tag';
import { getAsyncComponents } from './AsyncComponent';

import {
  GlobalStyle,
  BoxProvider,
  ProviderWrapper,
  ContentWrapper,
  CenterWrapper,
  Wrapper
} from './styled';

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
  const [ stateForComponent, setStateForComponent ] = useState<stateForComponentState>({});
  const [ stateSelected , setStateSelected ] = useState('');
  const [ activePanel, setActivePanel ] = useState('docs');
  const [ code, setCode ] = useState('');

  const getMetadata = (stateForComponent: stateForComponentState, stateSelected: string) => {
    const { pathname } = location;
    const selected = stateSelected || stateForComponent[pathname][0].name;
    const [ state ] = stateForComponent[pathname].filter(({ name }) => name === selected);
    return state;
  };

  const handleChangeCode = (selectedUseCase: string) => {
    const code = getMetadata(stateForComponent, selectedUseCase).code; 
    setCode(code);
  };

  const props = {
    db: db,
    setRouteActive,
    routeActive,
    setShowMenu,
    stateForComponent,
    setStateSelected,
    setStateForComponent,
    setActivePanel
  };
  return (
    <Provider {...props} >
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Shadow showMenu={showMenu} onClick={() => setShowMenu(!showMenu) }/>
          <Sidebar entries={db.entries} showMenu={showMenu} />
          <ContentWrapper showMenu={showMenu}>
            <Toolbar
              listStates={stateForComponent[pathname] ? stateForComponent[pathname].map(({ name }) => name) : []}
              setStateSelected={setStateSelected}
              setActivePanel={setActivePanel}
              activePanel={activePanel}
              handleChangeCode={handleChangeCode}
            />
            <ProviderWrapper>
              {activePanel === 'docs' && (
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
              )}
              {(activePanel === 'development' && stateForComponent[pathname]) && (
                <div style={{ padding: 15 }}>
                  {stateForComponent[pathname] && (
                    <DevZone
                      code={code || getMetadata(stateForComponent, stateSelected).code}
                      scope={getMetadata(stateForComponent, stateSelected).scope}
                    />
                  )}
                </div>
              )}

              {(activePanel === 'development' && !stateForComponent[pathname]) && (
                <div style={{ padding: 15 }}>
                  To work in this area you need to use the Playground component and give it a name as property.
                </div>
              )}
            </ProviderWrapper>
            {(activePanel === 'development' && stateForComponent[pathname]) && (
              <Addons
                code={code || getMetadata(stateForComponent, stateSelected).code}
                setCode={setCode}
              />
            )}
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
};

export default hot(module)(Root);