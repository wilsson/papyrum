import * as React from 'react';
import { useState } from 'react';
import { Bookmark, ChevronDown } from 'react-feather';
import {
  MenuWrapper,
  SubListItemStyled,
  ListItem,
  HeaderList
} from './styled';
import { NavLink } from 'react-router-dom';

export const SubList = ({
  name,
  children,
  activeParent,
  onChange,
  isOpen,
  routeActive,
  foo
}) => {
  const { pathname } = location;
  const validOpenWithUrl = children.filter(child => child.route === pathname);
  const [ active, setActive ] = useState(pathname);
  const [ open, setOpen ] = useState(!!validOpenWithUrl.length || isOpen);
  console.log('entry SubList', routeActive, open);
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
      {(!!routeActive  || open) && (
        <MenuWrapper>
          {children.map((child, key) => {
            const { name, route } = child;
            const parent = active === activeParent || !activeParent;
            let isActive = (active === route && parent) || false;
            console.log('entry child', routeActive);
            isActive = routeActive === route || isActive;
            if(routeActive) {
              foo();
            }
            return (
              <React.Fragment key={key}>
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
