import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import { connect } from 'react-redux';
import { changeRoute, changeRouteHeading, toggleMenu } from '../../actions/app';
import styled, { css } from 'styled-components'

import {
  MenuWrapper,
  SubListItemStyled,
  ListItem,
  HeaderList,
  HeadingWrapper,
  ItemHeading,
} from './styled';
import { border } from 'polished';

export interface Entry {
  name: string;
  route: string;
  children?: any[];
  open?: boolean;
}

const equal = (x, y) => {
  console.log('1>>', x, JSON.stringify(x))
  console.log('2>>', y, JSON.stringify(y))
  console.log('3>>', JSON.stringify(x) === JSON.stringify(y))
  return JSON.stringify(x) === JSON.stringify(y)
};

interface HeadingProps {
  type?: string;
  heading: any[];
  routeHeadingActive: string;
  handleChangeRouteHeading: Function;
  toggleMenu: Function;
}

const Heading: React.FC<HeadingProps> = ({
  type,
  heading,
  routeHeadingActive,
  handleChangeRouteHeading,
  toggleMenu
}) => {
  return(
  <HeadingWrapper type={type}>
    {heading.filter(({ depth }) => depth === 2).map((node, key) => (
        <ItemHeading key={key}
          active={routeHeadingActive.replace('#', '') === node.slug}
          href={`#${node.slug}`}
          onClick={() => {
            handleChangeRouteHeading(node.slug);
            window.innerWidth <= 1200 && toggleMenu();
          }}
        >
          {node.value}
        </ItemHeading>
    ))}
    </HeadingWrapper>
  );
};

export const SubMenu = ({
  entry,
  routeActive,
  routeHeadingActive,
  handleChangeRoute,
  handleChangeRouteHeading,
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
          {/*<ChevronDown size={15} style={{marginRight: 10}} />*/}
        </HeaderList>
      </ListItem>
      {open && (
        <MenuWrapper>
          {children.map((child, key) => {
            const { name, route, heading } = child;
            const active = equal(route, routeActive);
            return (
              <React.Fragment key={key}>
                <SubListItemStyled
                  onClick={() => {
                    handleChangeRoute(route);
                    window.innerWidth <= 1200 && toggleMenu();
                  }} 
                  active={active}
                >
                  <NavLink exact to={route}>{name}</NavLink>
            
                </SubListItemStyled>
                {(active && heading.length > 1) && (
                  <Heading
                    toggleMenu={toggleMenu}
                    type={"sub"}
                    handleChangeRouteHeading={handleChangeRouteHeading}
                    heading={heading}
                    routeHeadingActive={routeHeadingActive}
                  />
                )}
              </React.Fragment>
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
  toggleMenu,
  routeHeadingActive,
  handleChangeRouteHeading,
}) => {
  const { route, name, heading } = entry;
  const active = equal(route, routeActive);
  return (
    <>
      <ListItem active={active} onClick={() => {
        handleChangeRoute(route);
        window.innerWidth <= 1200 && toggleMenu();
      }}>
        <NavLink exact to={route}>{name}</NavLink>
      </ListItem>
      {(active && heading.length > 1) && (
        <Heading
          toggleMenu={toggleMenu}
          routeHeadingActive={routeHeadingActive}
          handleChangeRouteHeading={handleChangeRouteHeading}
          heading={heading}
        />
      )}
    </>
  )
};

const Ul = styled.ul`
  list-style: none;
  margin: 0 15px;
  padding: 0;
`

const Li = styled.li`
  a {
    font-size: 14px;
    height: 36px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    position: relative;
    color: ${props => props.theme.sidebar.color};
    text-decoration: none;
    margin-bottom: 5px;
    border-radius: 5px;
    ${props => props.active && css`
      background-color: ${props => props.theme.sidebar.backgroundActiveItem};
    `}
    &:hover {
      background-color: ${props => props.theme.sidebar.backgroundActiveItem};
      cursor: pointer;
    }
  }
  svg {
    width: 8px;
    height: 8px;
    margin-left: 4px;
    margin-right: 12px;
    color: ${props => props.theme.sidebar.color};
    opacity: .8;
  }
`;

const HeadingOther  = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 30px;
  margin-right: 15px;
  margin-top: 30px;
  height: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: ${props => props.theme.sidebar.color};
  font-weight: normal;
  
  &:first-child {
    margin-top: 0
  }
`;


const Menu = ({
  entries,
  handleChangeRoute,
  routeActive,
  toggleMenu,
  routeHeadingActive,
  handleChangeRouteHeading
}) => {
  return (
    <MenuWrapper>
      {entries.map((entry: Entry, key) => {
        const props = {
          routeActive,
          routeHeadingActive,
          entry,
          handleChangeRouteHeading,
          handleChangeRoute,
          toggleMenu,
        };
        
        return (
          <React.Fragment key={key}>
          <HeadingOther>
            {entry.name}
          </HeadingOther>
          <Ul>
            {entry.children.map((child, key) => {
              console.log('child.route', child.route)
              console.log('routeActive', routeActive)
              console.log('routeHeadingActive>>>', routeHeadingActive)
              const active = equal(child.route, routeActive);
              console.log('active', active)
              return(
                <Li key={key} active={active}>
                  <NavLink
                    exact
                    to={child.route}
                    onClick={() => {
                      handleChangeRoute(child.route);
                    }}
                  >
                    <svg fill="currentColor" className="css-1z0q2s1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg></svg>
                    {child.name}
                  </NavLink>
                </Li>
              )
            })}
          </Ul>
          </React.Fragment>
        );
      })}
    </MenuWrapper>
  );
};

const mapStateToProps = (state) => ({
  routeActive: state.route,
  routeHeadingActive: state.routeHeading
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeRoute: (route: string) => {
    dispatch(changeRoute(route));
    dispatch(changeRouteHeading(''));
  },
  handleChangeRouteHeading: (route: string) => {
    dispatch(changeRouteHeading(route));
  },
  toggleMenu: () => {
    dispatch(toggleMenu());
  }
});

const MenuHoc = connect(mapStateToProps, mapDispatchToProps)(Menu);

export { MenuHoc as Menu };