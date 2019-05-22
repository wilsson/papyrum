import React from 'react';
import styled, { css } from 'styled-components';
import p from 'prop-types';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border-radius: 2px;
  border: none;
  ${(props) => props.danger && css`
    background-color: #e44b4b;
  `}
`;

export const Button = ({
  children,
  danger,
  onClick
}) => (
  <ButtonStyled danger onClick={(e) => onClick(e)}>
    {children}
  </ButtonStyled>
);

class Message {}

Button.defaultProps = {
  appearance: 'primary',
  requiredAny: 'wilson'
};

Button.propTypes = {
  appearance: p.oneOf(['primary', 'secondary', 'stroke', 'flat']).isRequired,
  optionalArray: p.array,
  /** description of optionalBool */
  optionalBool: p.bool.isRequired,
  optionalFunc: p.func,
  optionalNumber: p.number,
  optionalObject: p.object,
  optionalString: p.string,
  optionalSymbol: p.symbol,
  optionalNode: p.node,
  optionalElement: p.element,
  optionalMessage: p.instanceOf(Message),
  optionalEnum: p.oneOf(['primary', 'secondary', 'danger']),
  optionalUnion: p.oneOfType([
    p.string,
    p.number,
    p.instanceOf(Message)
  ]),
  optionalArrayOf: p.arrayOf(p.number),
  optionalObjectOf: p.objectOf(p.number),
  optionalObjectWithShape: p.shape({
    color: p.string.isRequired,
    fontSize: p.number,
    other: p.shape({
      color: p.string.isRequired,
      fontSize: p.number,
      card: p.shape({
        color: p.string.isRequired,
        fontSize: p.number,
        myShape: p.instanceOf(Message).isRequired
      }),
    }),
    name: p.string,
  }).isRequired,
  requiredFunc: p.func.isRequired,
  /** campo requerido */
  requiredAny: p.any.isRequired,
};