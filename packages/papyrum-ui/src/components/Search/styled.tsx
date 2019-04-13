import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  line-height: 32px;
  background-color: #f4f4f4;
  outline: none;
  color: #5b5b5b;
  font-size: 14px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  padding-left: 16px;
  svg {
    width: 20px;
    margin-right: 10px;
  }
  margin-bottom: 40px;
`;
