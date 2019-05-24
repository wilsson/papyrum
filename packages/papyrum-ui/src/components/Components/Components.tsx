import * as React from 'react';
import { contextDB } from '@papyrum/cli';
import { useContext } from 'react';

export const Components = () => {
  const db: any = useContext(contextDB);
  return(
    <>
      Components
    </>
  )
};