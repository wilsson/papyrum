import * as React from 'react';

import {
  Wrapper,
  Color,
  ColorWrapper,
  Label
} from './styled';

export const Palette = ({ colors }) => (
  <Wrapper>
    {colors.map(color => (
      <ColorWrapper>
        <Label>{color.name}</Label>
        <Color color={color.color}>
          {color.color}
        </Color>
      </ColorWrapper>
    ))}
  </Wrapper>
);