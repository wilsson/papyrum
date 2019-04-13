import * as React from 'react';
import { Bookmark, ChevronUp } from 'react-feather';
import {
  SubListStyled,
  SubListItemStyled,
  ListItem,
  HeaderList
} from './styled';
import { NavLink } from 'react-router-dom';

const { useState } = React;

export const SubList = ({ name, entries, activeParent, onChange }) => {
  const { pathname } = location;
  const [active, setActive] = useState(pathname);
  const [open, setOpen] = useState(true);
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
          <ChevronUp />
        </HeaderList>
      </ListItem>
      {open && (
        <SubListStyled>
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
        </SubListStyled>
      )}
    </>
  );
};
