import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse; 
  font-size: 16px;
  margin: 20px 0 16px;
  color: ${props => props.theme.content.color};
`;

export const TableRow = styled.tr`
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.inner.gray};
`;

export const TableTd = styled.td`
  padding: 12px;
`;

export const TableTh = styled.th`
  text-align:left;
  padding: 12px;
  color: ${props => props.theme.inner.darkGray};
  font-weight: 700;
`;