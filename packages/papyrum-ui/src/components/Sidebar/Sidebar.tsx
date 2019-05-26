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
import { Entry } from '../Menu';

const useMenu = ({ query, entries }) => {
  if(query.length >= 3) {
    let db = {};
    for (let i = 0; i < Object.values(entries).length; i++) {
      const entry = (Object.values(entries)[i] as Entry);
      if(entry.name.toLocaleLowerCase().includes(query)) {
        db[entry.name] = {
          ...entry,
          open: true
        };
        continue;
      }
      if(entry.children) {
        db[entry.name] = {};
        db[entry.name].children = [];
        entry.children.forEach((child: Entry)=> {
          if(child.name.toLocaleLowerCase().includes(query)) {
            db[entry.name] = {
              ...db[entry.name],
              name: entry.name,
              open: true,
            };
            db[entry.name].children.push(child);
          }
        });
        if(!db[entry.name].children.length) {
          delete db[entry.name];
        } 
      }
    }
    return db;
  }
  return entries;
};

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