import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ProviderRedux } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Provider, store } from '@papyrum/ui';
import { Helmet} from "react-helmet";
import { Main } from './Main';

const Root = ({ db, imports, components }) => {
  return (
    <Provider db={{...db, components}}>
      <Helmet>
        <link rel="shortcut icon" href={db.config.favicon} />
      </Helmet>
      <ProviderRedux store={store}>
        <BrowserRouter>
          <Main imports={imports} fonts={db.config.fonts}/>
        </BrowserRouter>
      </ProviderRedux>
    </Provider>
  );
};

export default hot(module)(Root);