import * as React from 'react';
import { Search as IconSearch } from 'react-feather';
import { Input, SearchWrapper } from './styled';

export const Search = () => {
  return (
    <SearchWrapper>
      <IconSearch />
      <Input placeholder="Search" />
    </SearchWrapper>
  );
};
