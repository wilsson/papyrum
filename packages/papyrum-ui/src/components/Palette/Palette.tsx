import * as React from 'react';
import * as p from 'prop-types';

import {
  Wrapper,
  Color,
  ColorWrapper,
  Label,
  LabelColor
} from './styled';

export const Palette = ({ colors }) => (
  <Wrapper>
    {colors.map((color, key) => (
      <ColorWrapper key={key}>
        <Color color={color.color} />
        <Label>{color.name}</Label>
        <LabelColor>{color.color}</LabelColor>
      </ColorWrapper>
    ))}
  </Wrapper>
);

Palette.propTypes = {
  colors: p.arrayOf(p.shape({
    color: p.string,
    name: p.string
  })).isRequired
}