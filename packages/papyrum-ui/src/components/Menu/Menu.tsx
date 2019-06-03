import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bookmark } from 'react-feather';
import { SubList } from './SubList';
import { MenuWrapper, ListItem } from './styled';
import { useContext } from 'react';
import { contextDB } from '@papyrum/cli';
export interface Entry {
  name: string;
  route: string;
  children?: any[];
  open?: boolean;
}

const withChildren = ({
  name,
  setActive,
  active,
  children,
  open,
  routeActive
}) => {
  console.log('entry withchildren');
  return (
    <SubList
      routeActive={routeActive}
      activeParent={active}
      onChange={() => {
        setActive(false);
      }}
      foo={() => {
        setActive(false);
      }}
      name={name}
      children={children}
      isOpen={open}
    />
  )
};

const withoutChildren = ({
  name,
  setActive,
  isActive,
  route
}) => {
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
  const [ active, setActive ] = useState(pathname);
  const entriesMap = Object.values(entries);
  const { routeActive } = useContext(contextDB);
  return (
    <MenuWrapper>
      {entriesMap.map((entry: Entry, key) => {
        const { name, children, route, open } = entry;
        console.log('entry', active, route, routeActive);
        const isActive = active === route || false;
        const params = {
          name,
          setActive
        };
        return (
          <React.Fragment key={key}>
            {children
              ? withChildren({ ...params, active, children, routeActive, open })
              : withoutChildren({ ...params, isActive, route })}
          </React.Fragment>
        );
      })}
    </MenuWrapper>
  );
};
