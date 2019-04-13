import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Bookmark } from 'react-feather';
import { SubList } from './SubList';

import { List, ListItem } from './styled';

const { useState } = React;

interface Entry {
  name: string;
  route: string;
  children?: any[];
}

const withChildren = ({ name, setActive, active, children }) => (
  <SubList
    activeParent={active}
    onChange={() => {
      setActive(false);
    }}
    name={name}
    entries={children}
  />
);

const withoutChildren = ({ name, setActive, isActive, route }) => (
  <ListItem active={isActive} onClick={() => setActive(route)}>
    <NavLink exact to={route}>
      <Bookmark />
      {name}
    </NavLink>
  </ListItem>
);

export const Menu = ({ entries }) => {
  const { pathname } = location;
  const [active, setActive] = useState(pathname);
  return (
    <List>
      {Object.values(entries).map((entry: Entry, i) => {
        const { name, children, route } = entry;
        const isActive = active === route || false;
        const params = {
          name,
          setActive
        };
        return (
          <React.Fragment key={i}>
            {children
              ? withChildren({ ...params, active, children })
              : withoutChildren({ ...params, isActive, route })}
          </React.Fragment>
        );
      })}
    </List>
  );
};
