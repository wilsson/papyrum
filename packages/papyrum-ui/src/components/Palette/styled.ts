import styled, { css } from 'styled-components';
import { invert, grayscale } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-wrap: wrap;
`;

export const ColorWrapper = styled.div`
  margin-right: 20px;
  margin-top: 10px;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

export const Color = styled.div`
  width: 160px;
  height: 120px;
  ${(props) => props.color && css`
    background-color: ${props.color};
    color: ${grayscale(invert(props.color))};
  `}
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
`;