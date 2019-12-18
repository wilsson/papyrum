import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.backgroundHeader};
  border-bottom: 1px solid ${props => props.theme.colors.borderMenu};
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  font-weight: 700
`;