import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColorWrapper = styled.div`
  margin-right: 20px;
  margin-bottom: 6px;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 14px;
  display: block;
`;

export const LabelColor = styled.span`
  font-weight: 400;
  font-size: 14px;
  display: block;
`;

export const Color = styled.div`
  width: 150px;
  height: 120px;
  ${(props) => props.color && css`
    background-color: ${props.color};
  `}
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
`;