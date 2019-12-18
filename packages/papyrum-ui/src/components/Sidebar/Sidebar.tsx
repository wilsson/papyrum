import * as React from 'react';
import { useState, useContext } from 'react';
import { Search } from '../Search';
import { Menu } from '../Menu';
import { contextDB } from '../Provider';
import { Moon, Sun } from 'react-feather';
import Resizable from 're-resizable';
import { connect } from 'react-redux';

import {
  Wrapper,
  MenuWrapper,
  ShadowWrapper,
  Title,
  ButtonSwitchDark,
  WrapperButtonSwitch
} from './styled';

import { useMenu } from './useMenu';
import { toggleDarkMode, toggleMenu } from '../../actions/app';

const useOrder = (menu) => {
  const inmenu = { ...menu };
  const { db } = useContext(contextDB as any);
  const menuOrder = [];

  db.config.menu && db.config.menu.map((item) => {
    const name = item.name || item;
    Object.keys(inmenu).map((key: any) => {
      if (inmenu[key].name === name) {
        menuOrder.push(inmenu[key]);
        delete inmenu[key];
      }
    });
  });

  return [...menuOrder, ...Object.values(inmenu)];
};

const Sidebar = ({ entries, showMenu, isDark, toggleTheme, toggleMenu }) => {
  const { db } = useContext(contextDB as any);
  const [query, setQuery] = useState('');
  const menu = useMenu({ query, entries });
  const menuOrder = useOrder(menu);
  const [width, setWidth] = useState(240);

  const handleResizable = (e, direction, ref, d) => {
    setWidth(width + d.width);
  };

  return (
    <React.Fragment>
      <ShadowWrapper showMenu={showMenu} onClick={toggleMenu} />
      <Wrapper showMenu={showMenu} >
        <Resizable
          minWidth={240}
          maxWidth={1000}
          enable={{ right: true }}
          size={{ width: width, height: '100vh' }}
          onResizeStop={handleResizable}
        >
          {/*<Search onChange={(value) => setQuery(value)} />*/}
          <MenuWrapper>
            <Menu entries={menuOrder} />
          </MenuWrapper>
        </Resizable >
      </Wrapper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.app.darkmode
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => {
    dispatch(toggleDarkMode());
  },
  toggleMenu: () => {
    dispatch(toggleMenu());
  }
});

const SidebarHoc = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export { SidebarHoc as Sidebar };