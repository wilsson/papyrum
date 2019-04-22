import * as React from 'react';
import { Search } from '../Search';
import { Menu } from '../Menu';
import { SidebarWrapper, Logo } from './styled';
import { Entry } from '../Menu';

const { useState } = React;

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
}

export const Sidebar = ({ entries }) => {
  const [ query, setQuery ] = useState('');
  const menu = useMenu({ query, entries });
  return(
    <SidebarWrapper>
      <Logo src="http://placehold.it/200x80&text=LOGO" alt="" />
      <Search onChange={(value) => {
        setQuery(value);
      }} />
      <Menu entries={menu} />
    </SidebarWrapper>
  );
}
