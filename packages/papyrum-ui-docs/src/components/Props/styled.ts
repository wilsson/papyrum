import styled, { css } from 'styled-components';

export const TableWrapper = styled.div`
  border-radius: 10px;
  overflow: auto;
  border: 1px solid ${props => props.theme.inner.gray};
  table {
    margin: 0;
  }
`

export const Th = styled.th`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 12px;
  color: ${props => props.theme.content.color};
  text-align: left;
  padding: 0 12px;
`

export const Tr = styled.tr`
  background: ${props => props.theme.inner.gray};
  height: 36px;
`
