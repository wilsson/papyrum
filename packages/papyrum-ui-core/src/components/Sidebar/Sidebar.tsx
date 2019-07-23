import * as React from 'react';
import { useState, useContext } from 'react';
import { Search } from '../Search';
import { Menu } from '../Menu';
import { contextDB } from '../Provider';

import {
  Logo,
  Wrapper,
  ByWrapper,
  MenuWrapper
} from './styled';

import { useMenu } from './useMenu';

import styled from 'styled-components';

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding: 20px;
  overflow-wrap: break-word;
  color: #5B5B5B;
`;

const useOrder = (menu) => {
  const inmenu = { ...menu };
  const { db } = useContext(contextDB as any);
  const menuOrder = [];
  db.config.menu && db.config.menu.map((item) => {
    const name = item.name || item;
    Object.keys(inmenu).map((key: any) => {
      if(inmenu[key].name === name) {
        menuOrder.push(inmenu[key]);
        delete inmenu[key];
      }
    });
  })
  return [ ...menuOrder, ...Object.values(inmenu) ];
};

export const Sidebar = ({ entries, showMenu }) => {
  const { db } = useContext(contextDB as any);
  const [ query, setQuery ] = useState('');
  const menu = useMenu({ query, entries });
  const menuOrder = useOrder(menu);
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
        <Title>{db.config.title}</Title>
      </div>
      <div>
        <Search onChange={(value) => {
          setQuery(value);
        }} />
      </div>
      <MenuWrapper>
        <Menu entries={menuOrder} />
      </MenuWrapper>
      <ByWrapper>By Papyrum</ByWrapper>
    </Wrapper>
  );
};