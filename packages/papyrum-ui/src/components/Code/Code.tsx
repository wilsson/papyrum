import * as React from 'react'
import { Highlight } from '../Highlight';
import { HintWrapper, HintHeader } from './styled';
import { Info as InfoIcon, AlertCircle, CheckCircle } from 'react-feather';
import { P } from '../P';

const Tip = ({ name, children }) => {
  return(
    <HintWrapper type="tip">
      <HintHeader>
        <InfoIcon color="#01A5FE" />{name}
      </HintHeader>
      <P>{children}</P>
    </HintWrapper>
  )
};

const Info = ({ name, children }) => {
  return(
    <HintWrapper type="info">
      <HintHeader>
        <CheckCircle color="#26CB7C" />{name}
      </HintHeader>
      <P>{children}</P>
    </HintWrapper>
  )
};

const Warning = ({ name, children }) => {
  return(
    <HintWrapper type="warning">
      <HintHeader>
        <AlertCircle color="#F77D05" />{name}
      </HintHeader>
      <P>{children}</P>
    </HintWrapper>
  );
};


export const Code = ({ children, ...nextProps }) => {
  const { className, metastring } = nextProps;
  const type = className ? className.split('-')[1] : false;

  if(type === 'tip') {
    return <Tip name={metastring} children={children} />
  }

  if(type === 'info') {
    return <Info name={metastring} children={children} />
  }

  if(type === 'warning') {
    return <Warning name={metastring} children={children} />
  }

  return <Highlight code={children.trim()} language={type} />
};