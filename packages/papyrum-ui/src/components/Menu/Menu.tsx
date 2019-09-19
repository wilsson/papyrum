import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import { useContext } from 'react';
import { contextDB } from '../Provider';

import {
  MenuWrapper,
  SubListItemStyled,
  ListItem,
  HeaderList
} from './styled';

export interface Entry {
  name: string;
  route: string;
  children?: any[];
  open?: boolean;
}

const equal = (x, y) => JSON.stringify(x) === JSON.stringify(y);

export const SubMenu = ({
  entry,
  routeActive,
  setRouteActive,
  setShowMenu,
  open,
  setOpen,
  setActivePanel,
  setStateSelected
}) => {
  const { children, name } = entry;
  return (
    <React.Fragment>
      <ListItem onClick={(event) => {
        event.preventDefault();
        setOpen(!open)
      }}>
        <HeaderList href="#" open={open}>
          {name}
          <ChevronDown size={15} color="#5b5b5b" style={{marginRight: 10}} />
        </HeaderList>
      </ListItem>
      {open && (
        <MenuWrapper>
          {children.map((child, key) => {
            const { name, route } = child;
            const active = equal(route, routeActive);
            return (
              <SubListItemStyled
                key={key}
                onClick={() => {
                  setRouteActive(route);
                  setShowMenu(false); 
                  setActivePanel('docs'); 
                  setStateSelected('');
                }} 
                active={active}
              >
                <NavLink exact to={route}>{name}</NavLink>
              </SubListItemStyled>
            );
          })}
      </MenuWrapper>
      )}
    </React.Fragment>
  )
};

const MenuItem = ({
  routeActive,
  setRouteActive,
  setShowMenu,
  entry,
  setActivePanel,
  setStateSelected
}) => {
  const { route, name } = entry;
  const active = equal(route, routeActive);
  return (
    <ListItem active={active} onClick={() => {
      setRouteActive(route);
      setShowMenu(false);
      setActivePanel('docs');
      setStateSelected('');
    }}>
      <NavLink exact to={route}>{name}</NavLink>
    </ListItem>
  )
};

export const Menu = ({ entries }) => {
  const [ open, setOpen ] = useState(true);
  const { routeActive, setRouteActive, setShowMenu, setActivePanel, setStateSelected } = (useContext as any)(contextDB);
  return (
    <MenuWrapper>
      {entries.map((entry: Entry, key) => {
        const props = { routeActive, setRouteActive, entry, setShowMenu, setActivePanel, setStateSelected };
        return (
          <React.Fragment key={key}>
            {entry.children
              ? <SubMenu { ...props } open={open} setOpen={setOpen} />
              : <MenuItem {...props } />}
          </React.Fragment>
        );
      })}
    </MenuWrapper>
  );
};
