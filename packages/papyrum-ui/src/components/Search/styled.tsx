import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  line-height: 28px;
  background-color: transparent;
  outline: none;
  color: #5b5b5b;
  font-size: 14px;
  padding: 0;
`;

export const SearchWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.borderMenu};
  border-bottom: 1px solid ${props => props.theme.colors.borderMenu};
  transition: all .3s ease;
  padding-left: 24px;
  svg {
    width: 15px;
    margin-right: 10px;
  }
  margin-bottom: 15px;
`;
