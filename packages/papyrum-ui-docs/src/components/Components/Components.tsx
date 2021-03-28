import * as React from 'react';
import { contextDB } from '@papyrum/ui';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeRoute } from '@papyrum/ui';
import styled from 'styled-components'

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


const TableWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.inner.gray};
  table {
    margin: 0;
  }
`

const Th = styled.th`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 12px;
  color: ${props => props.theme.content.color};
  text-align: left;
  padding: 0 12px;
`

const Tr = styled.tr`
  background: ${props => props.theme.inner.gray};
  height: 36px;

`

const Components = ({ handleChangeRoute }) => {
  const { db } = useContext(contextDB);
  return(
    <TableWrapper>
      <Table style={{ width: '100%' }}>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Status</Th>
        </Tr>
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
    </TableWrapper>
  )
};

const mapDispatchToProps = (dispatch) => ({
  handleChangeRoute: (route) => {
    dispatch(changeRoute(route));
  }
});

const ComponentsHoc = connect(null, mapDispatchToProps)(Components);

export { ComponentsHoc as Components };