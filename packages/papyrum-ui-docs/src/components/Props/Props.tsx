import * as React from 'react';
import { useContext } from 'react';
import { contextDB, Table, TableRow, TableTd, TableTh, InlineCode } from '@papyrum/ui';
import * as p from 'prop-types';
import styled from 'styled-components'

import {
  TableWrapper,
  Tr,
  Th
} from './styled'

const wordUpperCase = (word: string) => word[0].toUpperCase() + word.slice(1);

export const Props = ({ of: component }) => {
  const { db } = useContext(contextDB);
  const pathname = component.__filemeta.filename;
  const { props } = db.props[pathname];
  const propsName = props && Object.keys(props);

  if(!propsName) {
    return null;
  }

  return(
    <TableWrapper>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Description</Th>
            <Th>Default</Th>
          </Tr>
        </thead>
        <tbody>
          {propsName.map((name, key) => {
            const {
              type,
              required,
              defaultValue,
              description
            } = props[name];

            return(
              <TableRow key={key}>
                <TableTd>
                  <InlineCode>
                    {name}
                    {required && <span style={{ color: 'red' }}>*</span>}
                  </InlineCode>
                </TableTd>
                {type.name !== 'enum' && <TableTd><InlineCode>{wordUpperCase(type.name)}</InlineCode></TableTd>}
                {type.name === 'enum' && <TableTd><InlineCode>{type.value.map((type, i) => type.value.replace(/\'/g, '')).join('|')}</InlineCode></TableTd>}
                <TableTd>{description ? description : '-'}</TableTd>
                <TableTd>{defaultValue ? defaultValue.value : '-'}</TableTd>
              </TableRow>
            )
          })}
        </tbody>
      </Table>
    </TableWrapper>
  )
};

Props.propTypes = {
  of: p.func
};