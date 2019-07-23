import * as React from 'react';
import { contextDB } from './context';

export const Provider = ({ children, ...nextProps }) => (
  <contextDB.Provider value={{...nextProps}} >
    {children}
  </contextDB.Provider>
);