
import styled, { css } from 'styled-components';
import { AStyled } from '@papyrum/ui';

import {
  TableTd,
} from '@papyrum/ui';

export const Status = styled.div`
  width: max-content;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 14px;
  ${props => props.status === 'ready' && css`
    background-color: ${props => props.theme.inner.green};
  `}
  ${props => props.status === 'development' && css`
    background-color: ${props => props.theme.inner.skyblue};
  `}
  ${props => props.status === 'deprecated' && css`
    background-color: ${props => props.theme.inner.orange};
  `}
`;

export const Name = styled(TableTd)`
  a {
    ${AStyled}
  }
`;