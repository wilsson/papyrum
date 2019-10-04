import * as React from 'react';
import { useState, useContext } from 'react';
import { Search } from '../Search';
import { Menu } from '../Menu';
import { contextDB } from '../Provider';
import { Moon, Sun } from 'react-feather';
import Resizable from 're-resizable';

import {
  Wrapper,
  MenuWrapper,
  Title,
  ButtonSun,
  WrapperButtonSun
} from './styled';

import { useMenu } from './useMenu';

const useOrder = (menu) => {
  const inmenu = { ...menu };
  const { db } = useContext(contextDB as any);
  const menuOrder = [];

  db.config.menu && db.config.menu.map((item) => {
    const name = item.name || item;
    Object.keys(inmenu).map((key: any) => {
      if (inmenu[key].name === name) {
        menuOrder.push(inmenu[key]);
        delete inmenu[key];
      }
    });
  });

  return [...menuOrder, ...Object.values(inmenu)];
};

export const Sidebar = ({ entries, showMenu, isDark, toggleTheme }) => {
  const { db } = useContext(contextDB as any);
  const [query, setQuery] = useState('');
  const menu = useMenu({ query, entries });
  const menuOrder = useOrder(menu);
  const [width, setWidth] = useState(240);

  const handleResizable = (e, direction, ref, d) => {
    setWidth(width + d.width);
  };

  return (
    <Wrapper showMenu={showMenu} >
      <Resizable
        minWidth={240}
        maxWidth={1000}
        enable={{ right: true }}
        size={{ width: width, height: '100vh' }}
        onResizeStop={handleResizable}
      >
        <WrapperButtonSun>
          <ButtonSun onClick={toggleTheme}>
            {isDark ? <Sun size={15} /> : <Moon size={15} /> }
          </ButtonSun>
        </WrapperButtonSun>
        <Title>{db.config.title}</Title>
        <Search onChange={(value) => {
          setQuery(value);
        }} />
        <MenuWrapper>
          <Menu entries={menuOrder} />
        </MenuWrapper>
        {/*<ByWrapper>By Papyrum</ByWrapper>*/}
      </Resizable >
    </Wrapper>
  );
};