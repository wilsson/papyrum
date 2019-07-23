
import styled, { css } from 'styled-components';
import { styles } from '../A/styled';

import {
  TableTd,
} from '../Table';

export const Status = styled.div`
  width: max-content;
  color: white;
  padding: 2px 12px;
  border-radius: 13px;
  ${props => props.status === 'ready' && css`
    background-color: #5cbb3c;
  `}
  ${props => props.status === 'development' && css`
    background-color: #5f64e4;
  `}
  ${props => props.status === 'deprecated' && css`
    background-color: #e45f5f ;
  `}
`;

export const Name = styled(TableTd)`
  a {
    ${styles}
  }
`;