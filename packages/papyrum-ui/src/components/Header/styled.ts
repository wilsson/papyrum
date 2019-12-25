import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.grayLight};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.darkGray};
  font-size: 24px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  font-weight: 700;
  transition: all .3s ease;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    margin-right: 10px;
    display: none;
  }
  @media (max-width: 1200px) {
    svg {
      display: block;
    }
  }
`;