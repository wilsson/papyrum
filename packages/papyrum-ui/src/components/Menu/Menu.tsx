import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions/app';
import { toggleMenu } from '../../actions/app';

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
  handleChangeRoute,
  toggleMenu
}) => {
  const [ open, setOpen ] = useState(true);
  const { children, name } = entry;
  return (
    <React.Fragment>
      <ListItem onClick={(event) => {
        event.preventDefault();
        setOpen(!open)
      }}>
        <HeaderList href="#" open={open}>
          {name}
          <ChevronDown size={15} style={{marginRight: 10}} />
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
                  handleChangeRoute(route);
                  toggleMenu();
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
  entry,
  handleChangeRoute,
  toggleMenu
}) => {
  const { route, name } = entry;
  const active = equal(route, routeActive);
  return (
    <ListItem active={active} onClick={() => {
      handleChangeRoute(route);
      toggleMenu();
    }}>
      <NavLink exact to={route}>{name}</NavLink>
    </ListItem>
  )
};

const Menu = ({ entries, handleChangeRoute, routeActive, toggleMenu }) => {
  return (
    <MenuWrapper>
      {entries.map((entry: Entry, key) => {
        const props = { routeActive, entry, handleChangeRoute, toggleMenu };
        return (
          <React.Fragment key={key}>
            {entry.children
              ? <SubMenu {...props } />
              : <MenuItem {...props } />}
          </React.Fragment>
        );
      })}
    </MenuWrapper>
  );
};

const mapStateToProps = (state) => ({
  routeActive: state.route
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeRoute: (route: string) => {
    dispatch(changeRoute(route));
  },
  toggleMenu: () => {
    dispatch(toggleMenu());
  }
});

const MenuHoc = connect(mapStateToProps, mapDispatchToProps)(Menu);

export { MenuHoc as Menu };