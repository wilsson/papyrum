import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid ${props => props.theme.colors.borderMenu};
  border-collapse: collapse; 
  font-size: 16px;
  margin: 10px 0 20px;
`;

export const TableRow = styled.tr`
  box-sizing: border-box;
`;

export const TableTd = styled.td`
  border: 1px solid ${props => props.theme.colors.borderMenu};
  padding: 10px;
`;

export const TableTh = styled.th`
  border: 1px solid ${props => props.theme.colors.borderMenu};
  padding: 10px;
  background-color: ${props => props.theme.colors.backgroundCode};
  font-weight: 700;
`;