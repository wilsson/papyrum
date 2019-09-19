
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
  setRouteActive(route: string): void;
  setShowMenu(show: boolean): void;
  setStateSelected(state: string): void;
  setStateForComponent(states: stateForComponentState): void;
  setActivePanel(panel: string): void;
  routeActive: string;
  stateForComponent: stateForComponentState,
}

export const contextDB = React.createContext<Context | any>({});