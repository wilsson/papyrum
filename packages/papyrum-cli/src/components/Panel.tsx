import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Route, Switch } from 'react-router-dom';
import { Components, Playground, Fonts, Palette, Props, Link } from '@papyrum/ui-docs';

import {
  components,
  contextDB,
} from '@papyrum/ui';

import {
  CenterWrapper,
  BoxProvider,
} from './styled';

const shorcodes = {
  Components,
  Playground,
  Fonts,
  Palette,
  Props,
  Link
};

let providerComponents = {
  h1: components.H1,
  h2: components.H2,
  h3: components.H3,
  h4: components.H4,
  h5: components.H5,
  h6: components.H6,
  hr: components.Hr,
  p: components.P,
  pre: props => <div {...props} />,
  wrapper: BoxProvider,
  code: components.Code,
  ul: components.Ul,
  ol: components.Ol,
  a: components.A,
  blockquote: components.Blockquote,
  table: props => <div style={{overflow: 'auto'}}><components.Table {...props} /></div>,
  tr: components.TableRow,
  td: components.TableTd,
  th: components.TableTh,
  inlineCode: components.InlineCode,
  img: components.Img
};

const NoMatch = () => <CenterWrapper>Not Found</CenterWrapper>

const Panel = ({ componentsAsync }) => {
  const { db } = (React.useContext as any)(contextDB);

  let map = {
    ...providerComponents
  };

  if(db.config.shorcodes) {
    map = {
      ...map,
      ...shorcodes
    };
  }

  map = {
    ...map,
    ...db.components
  };

  return (
    <div style={{overflowY: 'auto'}}>
      <MDXProvider components={map}>
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
    </div>
  )
};

export { Panel };