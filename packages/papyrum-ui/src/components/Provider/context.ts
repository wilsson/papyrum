
import * as React from 'react';

export interface stateForComponentState {
  [pathname: string]: [{
    name: string;
    code: string;
    scope: Object;
  }]
}

export interface DB {
  [pathsrc: string]: {
    filepath: string;
    name: string;
    route: string;
    nameChunk: string;
    path: string;
  }
}

export interface Context {
  db: DB,
}

export const contextDB = React.createContext<Context | any>({});