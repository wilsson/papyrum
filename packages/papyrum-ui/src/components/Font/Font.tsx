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
  FontWeightWrapper,
  WrapperSquare,
  Square,
  TextWrapper
} from './styled';

export const FontSize = ({ fonts, fontFamily }) => (
  <FontSizeWrapper font={fontFamily}>
    <Box>
    {fonts.map((font) => {
      let { size, text } = font;
      size = size ? size : font;
      return(
        <FontSizeRow>
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
class M {}
FontSize.propTypes = {
  fontFamily: p.string,
  fonts: p.oneOfType([
    p.string,
    p.instanceOf(M),
    p.shape({
      text: p.string,
      size: p.string
    })
  ])
}