import * as React from 'react';
import { contextDB } from '@papyrum/ui';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeRoute } from '@papyrum/ui';

import {
  Table, 
  TableRow,
  TableTh,
  TableTd
} from '@papyrum/ui';

import {
  Status,
  Name,
} from './styled';

const Components = ({ handleChangeRoute }) => {
  const { db } = useContext(contextDB);
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
                    handleChangeRoute(route);
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

const mapDispatchToProps = (dispatch) => ({
  handleChangeRoute: (route) => {
    dispatch(changeRoute(route));
  }
});

const ComponentsHoc = connect(null, mapDispatchToProps)(Components);

export { ComponentsHoc as Components };