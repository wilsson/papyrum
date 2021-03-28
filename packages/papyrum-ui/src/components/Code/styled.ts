import styled, { css } from 'styled-components';

export const HintWrapper = styled.div`
  color: ${props => props.theme.content.color};
  background-color: ${props => props.theme.inner.gray};
  border-radius: 3px;
  padding: 15px 15px;
  margin: 40px 0;
  ${props => props.type === 'info' && css`
    border-left: 8px solid ${props => props.theme.inner.green};
  `}

  ${props => props.type === 'tip' && css`
    border-left: 8px solid ${props => props.theme.inner.skyblue};
  `}

  ${props => props.type === 'warning' && css`
    border-left: 8px solid ${props => props.theme.inner.orange};
  `}

  p {
    margin-left: 36px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

export const HintHeader = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`;