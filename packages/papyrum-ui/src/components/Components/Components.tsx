import * as React from 'react';
import { contextDB } from '@papyrum/cli';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Table, 
  TableRow,
  TableTh
} from '../Table';

import {
  Status,
  Name
} from './styled';

export const Components = () => {
  const { db, handleActive } = useContext(contextDB);
  return(
    <Table style={{ width: '100%' }}>
      <thead>
        <TableRow>
          <TableTh>
            Components
          </TableTh>
          <TableTh>
            Status
          </TableTh>
        </TableRow>
      </thead>
      <tbody>
        {Object.values(db.plain)
          .filter((component: any) => !!component.status)
          .map((component: any, key) => (
            <TableRow key={key}>
              <Name>
                <NavLink exact to={component.route} onClick={() => {
                  handleActive(component.route);
                }}>
                  {component.name}
                </NavLink>
              </Name>
              <Status status={component.status}>{component.status}</Status>
            </TableRow>
          ))
        }
      </tbody>
    </Table>
  )
};