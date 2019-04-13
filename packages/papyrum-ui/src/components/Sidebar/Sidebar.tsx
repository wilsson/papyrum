import * as React from 'react';
import { Search } from '../Search';
import { Menu } from '../Menu';

import { SidebarWrapper, Logo } from './styled';

export const Sidebar = ({ entries }) => (
  <SidebarWrapper>
    <Logo src="http://placehold.it/200x80&text=LOGO" alt="" />
    <Search />
    <Menu entries={entries} />
  </SidebarWrapper>
);
