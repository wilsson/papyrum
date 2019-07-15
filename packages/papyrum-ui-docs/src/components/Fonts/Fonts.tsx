import * as React from 'react';
import * as p from 'prop-types';

import { 
  FontSizeWrapper,
  FontSizeRow,
  FontSizeLabelSize,
  FontSizeLabelText,
  LabelFont,
  LabelFontWrapper,
  Box,
} from './styled';

export const Fonts = ({ fonts, fontFamily }) => (
  <FontSizeWrapper font={fontFamily}>
    <Box>
    {fonts.map((font, key) => {
      let { size, text } = font;
      size = size ? size : font;
      return(
        <FontSizeRow key={key}>
          <FontSizeLabelSize>{size}</FontSizeLabelSize>
          <FontSizeLabelText size={size}>{text || 'The quick brown fox jumps over the lazy dog.'}</FontSizeLabelText>
        </FontSizeRow>
      )
    })}
    </Box>
    {fontFamily && (
      <LabelFontWrapper>
        <LabelFont>{fontFamily}</LabelFont>
      </LabelFontWrapper>
    )}
  </FontSizeWrapper>
);

Fonts.propTypes = {
  fontFamily: p.string,
  fonts: p.arrayOf(
    p.oneOfType([
      p.string,
      p.shape({
        text: p.string,
        size: p.string
      })
    ])
  )
};