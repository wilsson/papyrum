import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse; 
  font-size: 16px;
  margin: 10px 0 20px;
`;

export const TableRow = styled.tr`
  box-sizing: border-box;
`;

export const TableTd = styled.td`
  border: 1px solid ${props => props.theme.colors.borderMenu};
  height: 60px;
  padding: 0 20px;
`;

export const TableTh = styled.th`
  background-color: ${props => props.theme.colors.grayLight};
  border: 1px solid ${props => props.theme.colors.gray};
  height: 50px;
  font-weight: 700;
`;