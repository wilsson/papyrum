import * as React from 'react';
import { Sidebar } from '@papyrum/ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/tag';
import { getAsyncComponents } from './AsyncComponent';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Wrapper } from './styled';
//import { context } from '../hooks/useDevelopment';

import { useState, memo, Suspense } from 'react';
import {
  components,
  fontFace,
  Tab,
  DevelopmentZone,
  Shadow
} from '@papyrum/ui';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    overflow: hidden;
  }
  ${fontFace}
`;

const BoxProvider = styled.div`
  height: 100vh;
  padding: 60px;
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 100vw;
  }
  @media (max-width: 720px) {
    padding: 20px;
  }
`;

const ProviderWrapper = styled.div`
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;
  transition: transform .3s ease;
  @media (max-width: 1200px) {
    transform: translateX(-240px);
  }
  display: flex;
  flex-direction: column;
`;

const Loader = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const c = {
  h1: components.H1,
  h2: components.H2,
  h3: components.H3,
  h4: components.H4,
  h5: components.H5,
  h6: components.H6,
  p: components.P,
  pre: props => <div {...props} />,
  wrapper: BoxProvider,
  code: components.Code
};

const ProviderMdx = ({
  //handle,
  //cases,
  componentsAsync,
  db,
  //setCodeForZoneDevelopment
}) => {
  return(
    <MDXProvider components={c}>
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
  )
}

//{/*<context.Provider value={{ handle, cases, setCodeForZoneDevelopment }}>*/}
//{/*</context.Provider>*/}
/*const Memo = memo(ProviderMdx, (prev, next) =>{
  return  JSON.stringify(prev.cases) === JSON.stringify(next.cases);
});*/

const ContentProvider = ({
  //handle,
  //cases,
  db,
  componentsAsync,
  //setCodeForZoneDevelopment,
  //hidden
}) => {
  return(
    <ProviderWrapper
      //hidden={hidden}
    >
      <ProviderMdx
        //setCodeForZoneDevelopment={setCodeForZoneDevelopment}
        //handle={handle}
        //cases={cases}
        componentsAsync={componentsAsync}
        db={db}/>
    </ProviderWrapper>
  )
};

export const Root = ({ db, imports }) => {
  const componentsAsync = getAsyncComponents(imports);
  const [ showMenu, setShowMenu ] = useState(false);
  //const [ cases, setCases ] = useState({});
  //const [ tab, setTab ] = useState('docs');
  //const [ useCase, setUseCase ] = useState(0);
  console.log('render root');
  /*
  if(!cases[location.pathname]) {
    setCases({
      ...cases,
      [location.pathname]: []
    });
  }
  const handle = (code: string, scope: any, name: string) => {
    setCases({
      ...cases,
      [location.pathname]: [ ...cases[location.pathname], { code, scope, name }]
    });
  };
  const setCodeForZoneDevelopment = () => {
    if(!cases[location.pathname]) {
      setCases({
        ...cases,
        [location.pathname]: []
      });
    }
  };
  */
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Shadow showMenu={showMenu} onClick={() => setShowMenu(!showMenu) }/>
          {/*<context.Provider value={{ handle, cases, setCodeForZoneDevelopment }}>*/}
          <Sidebar entries={db.entries} showMenu={showMenu} />
          {/*</context.Provider>*/}
          <ContentWrapper showMenu={showMenu}>
            {/*{(cases[location.pathname] && !!cases[location.pathname].length) && (
              <Tab 
                handleShowMenu={() => setShowMenu(!showMenu) }
                handleChangeTab={(tab: string) => {
                  setTab(tab);
                }}
                tab={tab}
                useCases={cases[location.pathname]}
                setUseCase={setUseCase}
              />
            )} */}
            <ProviderWrapper>
              <MDXProvider components={c}>
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
            {/*<ContentProvider
                //handle={handle}
                //cases={cases}
                db={db}
                componentsAsync={componentsAsync}
                //setCodeForZoneDevelopment={setCodeForZoneDevelopment}
                //hidden={tab === 'development'}
            />
            */}
            {/* {tab === 'development' && <>
              {cases[location.pathname] && (
                <DevelopmentZone
                  useCase={{
                    code: cases[location.pathname][useCase].code,
                    scope: cases[location.pathname][useCase].scope
                  }}
                />
              )}
            </>} */}
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};