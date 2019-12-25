import * as React from 'react';
import { useContext } from 'react';
import { ThemeProvider } from "styled-components";
import { connect } from 'react-redux';
import { Panel } from './Panel';

import {
  Sidebar,
  lightTheme,
  darkTheme,
  contextDB,
  Header
} from '@papyrum/ui';

import {
  ContentWrapper,
  GlobalStyle,
  Wrapper
} from './styled';

import { getAsyncComponents } from './AsyncComponent';

const Main = ({ isDark, showMenu, imports }) => {
  const { db } = (useContext as any)(contextDB);
  const componentsAsync = getAsyncComponents(imports);

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <React.Fragment>
          <Header />
          <Wrapper>
            <Sidebar entries={db.entries} showMenu={showMenu} />
            <ContentWrapper showMenu={showMenu}>
              <Panel componentsAsync={componentsAsync} />
            </ContentWrapper>
          </Wrapper>
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  isDark: state.app.darkmode,
  showMenu: state.app.showMenu
});

const MainHoc = connect(mapStateToProps)(Main);

export { MainHoc as Main };