import styled from 'styled-components';

export const ToolBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.borderMenu};
  /* height: 36px; */
  height: 28px;
  svg {
    /* width: 20px; */
    width: 15px;
    color: #A4A4A4;
  }
`;

export const Separate = styled.div`
  width: 1px;
  height: 20px;
  background-color: #DFDFDF;
`;

export const Link = styled.a`
  margin-right: 8px;
  margin-left: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
