import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ProviderRedux } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Provider, store } from '@papyrum/ui';

import { Main } from './Main';

const Root = ({ db, imports }) => {
  return (
    <Provider db={db}>
      <ProviderRedux store={store}>
        <BrowserRouter>
          <Main imports={imports} />
        </BrowserRouter>
      </ProviderRedux>
    </Provider>
  );
};

export default hot(module)(Root);