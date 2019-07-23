import * as React from 'react';
import { Search as IconSearch } from 'react-feather';
import { Input, SearchWrapper } from './styled';

export const Search = ({ onChange }) => {
  return (
    <SearchWrapper>
      <IconSearch />
      <Input placeholder="Search" onChange={(e) => {
        onChange(e.target.value);
      }}/>
    </SearchWrapper>
  );
};
