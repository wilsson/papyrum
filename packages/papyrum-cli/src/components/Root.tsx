import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ProviderRedux } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Provider, store } from '@papyrum/ui';
import { Helmet} from "react-helmet";
import { Main } from './Main';

const Root = ({ db, imports }) => {
  return (
    <Provider db={db}>
      <Helmet>
        <link rel="shortcut icon" href={db.config.favicon} />
      </Helmet>
      <ProviderRedux store={store}>
        <BrowserRouter>
          <Main imports={imports} />
        </BrowserRouter>
      </ProviderRedux>
    </Provider>
  );
};

export default hot(module)(Root);