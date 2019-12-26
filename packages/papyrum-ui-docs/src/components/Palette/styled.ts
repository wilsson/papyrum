import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 40px;
`;

export const ColorWrapper = styled.div`
  margin-right: 30px;
  margin-bottom: 30px;
`;

export const Label = styled.span`
  margin-top: 10px;
  font-weight: 700;
  font-size: 18px;
  display: block;
  color: ${props => props.theme.colors.darkGray};
`;

export const LabelColor = styled.span`
  font-weight: 400;
  font-size: 14px;
  display: block;
  color: ${props => props.theme.colors.darkGray};
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