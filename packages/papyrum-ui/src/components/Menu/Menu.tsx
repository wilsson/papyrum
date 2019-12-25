import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions/app';

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
  open,
  setOpen,
  handleChangeRoute
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
  handleChangeRoute
}) => {
  const { route, name } = entry;
  const active = equal(route, routeActive);
  return (
    <ListItem active={active} onClick={() => {
      handleChangeRoute(route);
    }}>
      <NavLink exact to={route}>{name}</NavLink>
    </ListItem>
  )
};

const Menu = ({ entries, handleChangeRoute, routeActive }) => {
  const [ open, setOpen ] = useState(true);
  return (
    <MenuWrapper>
      {entries.map((entry: Entry, key) => {
        const props = { routeActive, entry };
        return (
          <React.Fragment key={key}>
            {entry.children
              ? <SubMenu { ...props } open={open} setOpen={setOpen} handleChangeRoute={handleChangeRoute}/>
              : <MenuItem {...props } handleChangeRoute={handleChangeRoute} />}
          </React.Fragment>
        );
      })}
    </MenuWrapper>
  );
};

const mapStateToProps = (state) => ({
  routeActive: state.route
})
const mapDispatchToProps = (dispatch) => ({
  handleChangeRoute: (route: string) => {
    dispatch(changeRoute(route));
  }
});

const MenuHoc = connect(mapStateToProps, mapDispatchToProps)(Menu);

export { MenuHoc as Menu };