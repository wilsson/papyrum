import styled, { css } from 'styled-components';

export const Box = styled.div`
  padding: 15px;
  box-sizing: border-box;
`;

export const FontSizeWrapper = styled.div`
  ${(props) => props.font && css`
    font-family: ${props.font};
  `}
  border: 1px solid ${props => props.theme.inner.gray};
  margin: 0 0 24px;
  border-radius: 2px;
  background-color: ${props => props.theme.content.background};
`;

export const LabelFont = styled.div`
  height: 24px;
  border: 1px solid ${props => props.theme.inner.gray};
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  box-sizing: border-box;
  height: 24px;
  display: flex;
  align-items: center;
  width: max-content;
  margin-bottom: -1px;
  margin-right: -1px;
  border-radius: 2px;
  color: ${props => props.theme.content.color};
`;

export const LabelFontWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FontSizeRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FontSizeLabelSize = styled.p`
  color: ${props => props.theme.content.color};
  font-size: 16px;
  margin: 0;
  margin-right: 20px;
`;

export const FontSizeLabelText = styled.p`
  color: ${props => props.theme.content.color};
  margin: 0;
  ${(props) => props.size && css`
    font-size: ${props.size};
  `}
`;

export const FontWeightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperSquare = styled.div`
  padding: 10px;
  background-color: #F2F2F2;
  display: flex;
  width: 250px;
  height: 120px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-right: 20px;
  margin-top: 20px;
`;

export const Square = styled.div`
  background-color: #D8F2FF;
  border-radius: 4px;
  padding: 6px 15px;
  box-sizing: border-box;
  font-size: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;