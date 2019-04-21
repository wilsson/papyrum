import * as React from 'react';
import { Bookmark, ChevronDown } from 'react-feather';
import {
  MenuWrapper,
  SubListItemStyled,
  ListItem,
  HeaderList
} from './styled';
import { NavLink } from 'react-router-dom';

const { useState } = React;

export const SubList = ({ isOpen, name, entries, activeParent, onChange }) => {
  const { pathname } = location;
  const validOpenWithUrl = entries.filter(child => child.route === pathname);
  const [ active, setActive ] = useState(pathname);
  console.log('!!validOpen.length', !!validOpenWithUrl.length);
  console.log('isOpen', isOpen);
  console.log('---');
  const [ open, setOpen ] = useState(!!validOpenWithUrl.length || isOpen);
  const handleToggleMenu = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <>
      <ListItem onClick={handleToggleMenu}>
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
          {entries.map((children, i) => {
            const { name, route } = children;
            const parent = active === activeParent || !activeParent;
            const isActive = (active === route && parent) || false;
            return (
              <React.Fragment key={i}>
                <SubListItemStyled
                  onClick={() => {
                    setActive(route);
                    onChange();
                  }}
                  active={isActive}
                >
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
  );
};
