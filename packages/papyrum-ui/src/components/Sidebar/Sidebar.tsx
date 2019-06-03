import * as React from 'react';
import { useState } from 'react';
import { Search } from '../Search';
import { Menu } from '../Menu';
import {
  Logo,
  Wrapper,
  ByWrapper,
  MenuWrapper
} from './styled';

import { useMenu } from './useMenu';

export const Sidebar = ({ entries, showMenu }) => {
  const [ query, setQuery ] = useState('');
  const menu = useMenu({ query, entries });
  const [ width, setWidth ] = useState(240);
  const handleResizable = (e, direction, ref, d) => {
    setWidth(width + d.width);
  };
  const propsResizable = {
    showMenu: showMenu,
    minWidth: 240,
    maxWidth: 1000,
    enable: {
      right: true
    },
    size: { width: width, height: '100vh' },
    onResizeStop: handleResizable
  };
  return(
    <Wrapper 
      showMenu={showMenu}
      minWidth={240}
      maxWidth={1000}
      enable={{
        right: true
      }}
      size= {{ width: width, height: '100vh' }}
      onResizeStop={handleResizable}
    >
      <div>
        <Logo src="http://placehold.it/200x80&text=LOGO" alt="" />
      </div>
      <div>
        <Search onChange={(value) => {
          setQuery(value);
        }} />
      </div>
      <MenuWrapper>
        <Menu entries={menu} />
      </MenuWrapper>
      <ByWrapper>By Papyrum</ByWrapper>
    </Wrapper>
  );
};