import * as React from 'react';
import { useContext } from 'react';
import { contextDB } from '@papyrum/ui-core';
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

const Shape = ({ type }) => {
  const shapeRecursive = (type, val = false) => {
    return(
      <div style={{ marginLeft: '20px' }}>
        {Object.keys(type.value).map((value, key) => {
          return(
            <div key={key} className="INNER-LINE">
              <div style={{ display: 'flex' }}>
                <LabelUnion>{value}</LabelUnion>
                <span style={{ marginTop: '10px', marginLeft: '10px'}}>{type.value[value].name}
                {(type.value[value].name === 'instanceOf') && <span> class {type.value[value].value} {'{}'}</span>}
                </span>
                {type.value[value].required && <span style={{color: '#DE6060', marginTop: '10px', marginLeft: '10px'}}>required</span>}
                {type.value[value].name === 'shape' && <span style={{ marginTop: '10px', marginLeft: '10px'}}>{'{'}</span>}
              </div>
              {type.value[value].name === 'shape' && <>
                {shapeRecursive(type.value[value], true)}
              </>}
            </div>
          )
        })}
        {(type.name === 'shape' && val) && <span style={{ marginLeft: '5px' }}>}</span>}
      </div>
    )
  }
  return shapeRecursive(type);
};

const Enum = ({ value }) => (
  <UnionWrapper>
    <LabelType>One Of</LabelType> {'<'} 
      {value.map((value, key) => (<LabelEnum key={key}>{value.value}</LabelEnum>))} 
    {'>'}
  </UnionWrapper>
);

const Union = ({ value }) => (
  <UnionWrapper>
    <LabelType>One Of</LabelType> {'<'}
    {value.map((value, key) => (
      <React.Fragment key={key}>
        <LabelUnion>
          {value.name !== 'shape' && wordUpperCase(value.name)}
        </LabelUnion>
        <div style={{ marginLeft: '25px'}}>
        {value.name === 'shape' && (
          <div style={{ marginTop: '10px' }}>
          <LabelType>Custom</LabelType>{'{'}
            <Shape type={value} />
          {'}'}
          </div>
        )}
        </div>
      </React.Fragment>
      )
    )} 
    {'>'}
  </UnionWrapper>
);

const myProps = {
  array: 'array',
  bool: 'boolean',
  func: 'function',
  number: 'number',
  object: 'object',
  string: 'string',
  symbol: 'symbol',
  node: 'node',
  element: 'element',
  instanceOf: 'instanceOf',
  union: 'union',
  enum: 'enum',
  arrayOf: 'arrayOf',
  objectOf: 'objectOf',
  shape: 'custom'
};

export const Props = ({ of: component }) => {
  const { db } = useContext(contextDB);
  const pathname = component.__filemeta.filename;
  const { props } = db.props[pathname];
  const propsName = Object.keys(props);
  return(
    <Wrapper>
      {propsName.map((name, key) => {
        const {
          type,
          required,
          defaultValue,
          description
        } = props[name];
        return(
          <Prop key={key}>
            <Header>
              <LabelNameWrapper>
                <LabelName>{name}</LabelName>
                <LabelType>{wordUpperCase(myProps[type.name])}</LabelType>
              </LabelNameWrapper>
              <LabelRequiredOrDefaultWrapper>
                {required && <Text>required</Text>}
                {defaultValue && <Text> = {defaultValue.value}</Text>}
              </LabelRequiredOrDefaultWrapper>
            </Header>
            {description && <Description>{description}</Description>}
          </Prop>
        )
      })}
    </Wrapper>
  )
};

Props.propTypes = {
  of: p.func
};