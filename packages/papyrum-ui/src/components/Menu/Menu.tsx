import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Bookmark } from 'react-feather';
import { SubList } from './SubList';
//const { useContext} = React;
//import { context } from '@papyrum/cli';

import { MenuWrapper, ListItem } from './styled';

const { useState } = React;

export interface Entry {
  name: string;
  route: string;
  children?: any[];
  open?: boolean;
}

const withChildren = ({ open, name, setActive, active, children }) => {
  //const { setCodeForZoneDevelopment } = useContext(context);
  //setCodeForZoneDevelopment();
  return (
    <SubList
      activeParent={active}
      onChange={() => {
        setActive(false);
      }}
      name={name}
      isOpen={open}
      entries={children}
    />
  )
};

const withoutChildren = ({ name, setActive, isActive, route }) => {
  //const {setCodeForZoneDevelopment } = useContext(context);
  //setCodeForZoneDevelopment();
  return (
    <ListItem active={isActive} onClick={() => setActive(route)}>
      <NavLink exact to={route}>
        <Bookmark />
        {name}
      </NavLink>
    </ListItem>
  )
};

export const Menu = ({ entries }) => {
  const { pathname } = location;
  const [active, setActive] = useState(pathname);
  console.log('active', active);
  return (
    <MenuWrapper>
      {Object.values(entries).map((entry: Entry, i) => {
        const { name, children, route, open } = entry;
        const isActive = active === route || false;
        const params = {
          name,
          setActive
        };
        return (
          <React.Fragment key={i}>
            {children
              ? withChildren({ ...params, active, children, open })
              : withoutChildren({ ...params, isActive, route })}
          </React.Fragment>
        );
      })}
    </MenuWrapper>
  );
};
