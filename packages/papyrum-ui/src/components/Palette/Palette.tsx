import * as React from 'react';
import * as p from 'prop-types';

import {
  Wrapper,
  Color,
  ColorWrapper,
  Label
} from './styled';

export const Palette = ({ colors }) => (
  <Wrapper>
    {colors.map((color, key) => (
      <ColorWrapper key={key}>
        <Label>{color.name}</Label>
        <Color color={color.color}>
          {color.color}
        </Color>
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