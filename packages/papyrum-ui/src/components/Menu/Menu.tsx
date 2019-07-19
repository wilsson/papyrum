import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bookmark, ChevronDown } from 'react-feather';
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

interface SubMenuProps {
  entry: any;
  routeActive: string;
  setRouteActive: Function;
  open: boolean;
  setOpen: Function;
}
const equal = (x, y) => JSON.stringify(x) === JSON.stringify(y);

export const SubMenu: React.FC<SubMenuProps> = ({
  entry,
  routeActive,
  setRouteActive,
  open,
  setOpen
}) => {
  const { children, name } = entry;
  return (
    <>
      <ListItem onClick={(event) => {
        event.preventDefault();
        setOpen(!open)
      }}>
        <HeaderList href="#" open={open}>
          <div>
            <Bookmark />
            {name}
          </div>
          <ChevronDown />
        </HeaderList>
      </ListItem>
      {open && (
        <MenuWrapper>
          {children.map((child, key) => {
            const { name, route } = child;
            const active = equal(route, routeActive);
            return (
              <React.Fragment key={key}>
                <SubListItemStyled onClick={() => setRouteActive(route)} active={active} >
                  <NavLink exact to={route}>
                    {name}
                  </NavLink>
                </SubListItemStyled>
              </React.Fragment>
            );
          })}
      </MenuWrapper>
      )}
    </>
  )
};

const MenuItem = ({
  routeActive,
  setRouteActive,
  entry
}) => {
  const { route, name } = entry;
  const active = equal(route, routeActive);
  return (
    <ListItem active={active} onClick={() => setRouteActive(route)}>
      <NavLink exact to={route}>
        <Bookmark />
        {name}
      </NavLink>
    </ListItem>
  )
};

export const Menu = ({ entries }): any => {
  const [ open, setOpen ] = useState(true);
  const { db, routeActive, setRouteActive } = (useContext as any)(contextDB);
  return (
    <MenuWrapper>
      {entries.map((entry, key) => {
        const props = { routeActive, setRouteActive, entry };
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
