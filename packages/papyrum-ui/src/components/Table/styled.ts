import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse; 
  font-size: 18px;
  margin: 20px 0 16px;
  color: ${props => props.theme.content.color};
`;

export const TableRow = styled.tr`
  box-sizing: border-box;
`;

export const TableTd = styled.td`
  border: 1px solid ${props => props.theme.inner.gray};
  height: 60px;
  padding: 0 20px;
`;

export const TableTh = styled.th`
  color: ${props => props.theme.inner.darkGray};
  background-color: ${props => props.theme.inner.grayLight};
  border: 1px solid ${props => props.theme.inner.gray};
  height: 50px;
  font-weight: 700;
`;