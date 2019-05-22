import * as React from 'react';
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

export const FontWeight = ({ fonts }) => {
  return(
    <FontWeightWrapper>
      {fonts.map((font) => {
        return(
          <WrapperSquare>
            <Square>Aa</Square>
            <TextWrapper>
              <div>{font.name}</div>
              <div>{font.weight}</div>
            </TextWrapper>
          </WrapperSquare>
        )
      })}
    </FontWeightWrapper>
  )
};

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