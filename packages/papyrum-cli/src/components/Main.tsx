import * as React from 'react';
import { useContext } from 'react';
import { ThemeProvider } from "styled-components";
import { connect } from 'react-redux';
import { Panel } from './Panel';
import * as deepmerge from 'deepmerge';

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

const Main = ({ isDark, showMenu, imports, fonts }) => {
  const { db } = (useContext as any)(contextDB);
  const { colors } = db.config;
  let dark = darkTheme;
  let light = lightTheme;
  if (colors) {
    if (colors.dark || colors.light) {
      dark = {
        ...deepmerge(dark, colors.dark || {}),
        inner: dark.inner
      };
      light = {
        ...deepmerge(light, colors.light || {}),
        inner: light.inner
      };
    }
  }
  const componentsAsync = getAsyncComponents(imports);
  return (
    <React.Fragment>
      <GlobalStyle fonts={fonts} />
      <ThemeProvider theme={isDark ? dark : light}>
        <React.Fragment>
          <Header />
          <Wrapper>
            <Sidebar showMenu={showMenu} />
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