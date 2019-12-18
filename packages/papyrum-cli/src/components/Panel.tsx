import * as React from 'react';
import { connect } from 'react-redux';
import { MDXProvider } from '@mdx-js/react';
import { Route, Switch } from 'react-router-dom';
import {
  components,
  Toolbar,
  contextDB,
} from '@papyrum/ui';

import {
  CenterWrapper,
  BoxProvider,
  ProviderWrapper
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

const Panel = ({ componentsAsync, isDark }) => {
  const { db } = (React.useContext as any)(contextDB);

  return (
    <React.Fragment>
      <ProviderWrapper>
        <MDXProvider components={providerComponents}>
          <React.Suspense fallback={<CenterWrapper>Loading...</CenterWrapper>}>
            <Switch>
              {Object.keys(db.plain).map((entry, i) => (
                  <Route
                    key={i}
                    exact
                    path={db.plain[entry].route}
                    component={componentsAsync[i]}
                  />
                )
              )}
              <Route component={NoMatch} />
            </Switch>
          </React.Suspense>
        </MDXProvider>
      </ProviderWrapper>
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  isDark: state.app.darkmode
});

const PanelHoc = connect(mapStateToProps)(Panel);

export { PanelHoc as Panel };