import * as React from 'react';
import { connect } from 'react-redux';
import { MDXProvider } from '@mdx-js/react';
import { Route, Switch } from 'react-router-dom';
import {
  components,
  Toolbar,
  stateForComponentState,
  Addons,
  contextDB,
  DevZone
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
  const { pathname } = location;
  const [activePanel, setActivePanel] = React.useState('docs');
  const [stateSelected, setStateSelected] = React.useState('');
  const [code, setCode] = React.useState('');
  const [stateForComponent, setStateForComponent] = React.useState<stateForComponentState>({});

  const getMetadata = (stateForComponent: stateForComponentState, stateSelected: string) => {
    const { pathname } = location;
    const selected = stateSelected || stateForComponent[pathname][0].name;
    const [state] = stateForComponent[pathname].filter(({ name }) => name === selected);
    return state;
  };

  const handleChangeCode = (selectedUseCase: string) => {
    const code = getMetadata(stateForComponent, selectedUseCase).code;
    setCode(code);
  };

  return (
    <React.Fragment>
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
            <React.Suspense fallback={<CenterWrapper>Loading...</CenterWrapper>}>
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
            </React.Suspense>
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
          isDark={isDark}
          setCode={setCode}
        />
      )}
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  isDark: state.app.darkmode
});

const PanelHoc = connect(mapStateToProps)(Panel);

export { PanelHoc as Panel };