import * as React from 'react';
import { useContext } from 'react';
import { contextDB } from '@papyrum/cli';
import {
  Wrapper,
  LabelName,
  LabelType,
  Prop,
  Description,
  LabelDefault,
  LabelRequired,
  Header,
  LabelNameWrapper,
  LabelTypeWrapper,
  LabelRequiredOrDefaultWrapper,
  LabelEnum,
  UnionWrapper,
  LabelUnion
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
      {value.map((value) => (<LabelEnum>{value.value}</LabelEnum>))} 
    {'>'}
  </UnionWrapper>
);

const Union = ({ value }) => (
  <UnionWrapper>
    <LabelType>One Of</LabelType> {'<'}
    {value.map((value) => (
      <>
        <LabelUnion>
          {value.name !== 'shape' && wordUpperCase(value.name)}

          {/* {value.value && (<> class {value.value} {'{}'}</>)} */}
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
      </>
      )
    )} 
    {'>'}
  </UnionWrapper>
);

export const Props = ({ of: component }) => {
  const db: any = useContext(contextDB);
  const pathname = component.__filemeta.filename;
  console.log('db.props', pathname);
  const { props } = db.props[pathname];
  console.log('props >>>>>>', props);
  if(!props) {
    return null;
  }
  const propsName = Object.keys(props);

  return(
    <Wrapper>
      {propsName.map((name) => {
        const {
          type,
          required,
          defaultValue,
          description
        } = props[name];
        return(
          <Prop>
            <Header>
              <LabelNameWrapper>
                <LabelName>{name}</LabelName>
                {type.name !== 'shape' && <LabelType>{wordUpperCase(type.name)}</LabelType>}
                {type.name === 'instanceOf' && <LabelType>class {type.value} {'{}'}</LabelType>}
              </LabelNameWrapper>
              <LabelRequiredOrDefaultWrapper>
                {required && <LabelRequired>required</LabelRequired>}
                {defaultValue && <LabelDefault>= {defaultValue.value}</LabelDefault>}
              </LabelRequiredOrDefaultWrapper>
            </Header>
            {type.name === 'enum' && <Enum value={type.value} />}
            {type.name === 'union' && <Union value={type.value} />}
            {type.name === 'arrayOf' && (
              <>
                {type.value.name === 'shape' && (
                  <>
                    <LabelUnion>
                      {'Array<{'}
                    </LabelUnion>
                    <Shape type={type.value} />
                    <LabelUnion>
                      {'}>'}
                    </LabelUnion>
                  </>
                )}
                {type.value.name !== 'shape' && (
                  <LabelUnion>
                    {'Array<'}{wordUpperCase(type.value.name)}
                    {'>'}
                  </LabelUnion>
                )}
              </>
            )}
            {type.name === 'objectOf' && <LabelUnion>{'Object<key['}{wordUpperCase(type.value.name)}{']>'}</LabelUnion>}
            {type.name === 'shape' && (
              <div style={{ marginTop: '10px' }}>
              <LabelType>Custom</LabelType>{'{'}
                <Shape type={type} />
              {'}'}
              </div>
            )}
            {description && <Description>{description}</Description>}
          </Prop>
        )
      })}
      {/* <pre>
      {JSON.stringify(props, null, 2)}
      </pre> */}
    </Wrapper>
  )
}