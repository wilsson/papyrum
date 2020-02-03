import styled, { css } from 'styled-components';

export const HintWrapper = styled.div`
  color: ${props => props.theme.content.color};
  background-color: ${props => props.theme.inner.grayLight};
  border-radius: 3px;
  padding: 25px 28px;
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
    margin-left: 44px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

export const HintHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  svg {
    margin-right: 20px;
  }
`;