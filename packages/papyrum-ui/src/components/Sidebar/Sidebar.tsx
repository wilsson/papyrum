import * as React from 'react';
import { useState, useContext } from 'react';
import { Search } from '../Search';
import { Menu } from '../Menu';
import { contextDB } from '@papyrum/cli';

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

export const Sidebar = ({ entries, showMenu }) => {
  const { db } = useContext(contextDB);
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
        <Title>{db.title}</Title>
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