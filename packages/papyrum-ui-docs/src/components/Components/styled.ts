
import styled, { css } from 'styled-components';
import { AStyled } from '@papyrum/ui';

import {
  TableTd,
} from '@papyrum/ui';

export const Status = styled.div`
  height: 18px;
  line-height: 18px;
  white-space: nowrap;
  width: max-content;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding: 4px;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${props => props.status === 'ready' && css`
    background-color: #c6f6d5;
    color: #22543d;
  `}
  ${props => props.status === 'development' && css`
    background-color: #e9d8fd;
    color: #44337a;
  `}
  ${props => props.status === 'deprecated' && css`
    background-color: #fed7d7;
    color: #822727;
  `}
`;

export const Name = styled(TableTd)`
  a {
    ${AStyled}
  }
`;