import * as React from 'react';
import { useContext } from 'react';
import { contextDB, Table, TableRow, TableTd, TableTh, InlineCode } from '@papyrum/ui';
import * as p from 'prop-types';

import {
  Wrapper,
  LabelName,
  LabelType,
  Prop,
  Description,
  Header,
  LabelNameWrapper,
  LabelRequiredOrDefaultWrapper,
  LabelEnum,
  UnionWrapper,
  LabelUnion,
  Text
} from './styled';

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
    <div style={{overflow: 'auto'}}>
      <Table>
        <thead>
          <TableRow>
            <TableTh>Name</TableTh>
            <TableTh>Type</TableTh>
            <TableTh>Description</TableTh>
            <TableTh>Default</TableTh>
          </TableRow>
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
                {type.name === 'enum' && <TableTd> <InlineCode>{type.value.map((type, i) => type.value.replace(/\'/g, '')).join('|')}</InlineCode></TableTd>}
                <TableTd>{description ? description : '-'}</TableTd>
                <TableTd>{defaultValue ? defaultValue.value : '-'}</TableTd>
              </TableRow>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
};

Props.propTypes = {
  of: p.func
};