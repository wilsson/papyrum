import * as React from 'react';
import { contextDB } from '@papyrum/cli';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Table, 
  TableRow,
  TableTh,
  TableTd
} from '../Table';

import {
  Status,
  Name,
} from './styled';

export const Components = () => {
  const { db, setRouteActive } = useContext(contextDB);
  return(
    <Table style={{ width: '100%' }}>
      <thead>
        <TableRow>
          <TableTh>Components</TableTh>
          <TableTh>Status</TableTh>
        </TableRow>
      </thead>
      <tbody>
        {Object.values(db.plain)
          .filter((component: any) => !!component.status)
          .map((component: any, key) => {
            const { name, route, status} = component;
            return(
              <TableRow key={key}>
                <Name>
                  <NavLink exact to={route} onClick={() => {
                    setRouteActive(route);
                  }}>
                    {name}
                  </NavLink>
                </Name>
                <TableTd>
                  <Status status={status}>{status}</Status>
                </TableTd>
              </TableRow>
            )
          })
        }
      </tbody>
    </Table>
  )
};