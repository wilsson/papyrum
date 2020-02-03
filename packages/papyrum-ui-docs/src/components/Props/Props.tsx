import * as React from 'react';
import { useContext } from 'react';
import { contextDB } from '@papyrum/ui';
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
    <Wrapper>
      {propsName && propsName.map((name, key) => {
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
                {type.name !== 'enum' && <LabelType>{wordUpperCase(type.name)}</LabelType>}
                {type.name === 'enum' && type.value.map((type, i) => <LabelType key={i}type="enum">{type.value.replace(/\'/g, '')}</LabelType>)}
 
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