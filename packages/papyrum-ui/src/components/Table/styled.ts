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
  border-top: 1px solid ${props => props.theme.inner.gray};
  > th {
    background: ${props => props.theme.inner.gray};
    height: 36px;
  }
`;

export const TableTd = styled.td`
  padding: 12px;
`;

export const TableTh = styled.th`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 12px;
  color: ${props => props.theme.content.color};
  text-align: left;
  padding: 0 12px;
`;