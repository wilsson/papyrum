
import styled, { css } from 'styled-components';
import { styles } from '../A/styled';

import {
  TableTd,
} from '../Table';

export const Status = styled(TableTd)`
  ${props => props.status === 'ready' && css`
    color: #588642;
  `}
  ${props => props.status === 'development' && css`
    color: #44778C;
  `}
  ${props => props.status === 'deprecated' && css`
    color: #8F3A3A;
  `}
`;

export const Name = styled(TableTd)`
  a {
    ${styles}
  }
`;