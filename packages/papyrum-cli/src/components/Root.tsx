import * as React from 'react';
import { useState, Suspense } from 'react';
import { Sidebar, Provider } from '@papyrum/ui';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/tag';
import { getAsyncComponents } from './AsyncComponent';
import { Wrapper } from './styled';
import styled from 'styled-components';
import { Layout, Layers } from 'react-feather';

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

const Label = styled.div`
  line-height: 22px;
  padding: 0 8px;
  font-size: 14px;
  color: #155724;
  background-color: #D4EDDA;
  font-weight: 700;
  border-radius: 10px;
  margin-right: 15px;
`;

const TabWrapper = styled.div`
  height: 40px;
  background-color: #F9FAFB;
  border-bottom: 1px solid #DBDBDB;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RigthWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftWrapper = styled.div`
`;

const TabItem = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #5B5B5B;
  padding: 0 15px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  padding: 0 15px;
  align-items: center;
  display: flex;
  cursor: pointer;
  > svg {
    transition: all ease .2s;
  }
  &:hover > svg {
    stroke: #00A8FF;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 15px;
  border-left: 1px solid #DBDBDB;
`;

const Tab = () => (
  <TabWrapper>
    <RigthWrapper>
      <TabItem>Docs</TabItem>
      <TabItem>Development</TabItem>
      <Separator />
      <IconWrapper>
        <Layers size={15} color="#5B5B5B" />
      </IconWrapper>
      <Separator />
      <IconWrapper>
        <Layout size={15} color="#5B5B5B" />
      </IconWrapper> 
    </RigthWrapper>
    <LeftWrapper>
      <Label>Ready</Label>
    </LeftWrapper>
  </TabWrapper>
);

export const Root = ({ db, imports }) => {
  const { pathname } = location;
  const componentsAsync = getAsyncComponents(imports);
  const [ showMenu, setShowMenu ] = useState(false);
  const [ routeActive, setRouteActive ] = useState(pathname);
  const props = {
    db: db,
    setRouteActive,
    routeActive,
    setShowMenu
  };
  return (
    <Provider {...props} >
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Shadow showMenu={showMenu} onClick={() => setShowMenu(!showMenu) }/>
          <Sidebar entries={db.entries} showMenu={showMenu} />
          <ContentWrapper showMenu={showMenu}>
            <Tab />
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