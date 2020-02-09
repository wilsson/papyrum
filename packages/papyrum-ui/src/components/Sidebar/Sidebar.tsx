import * as React from 'react';
import { useState, useContext } from 'react';
import { Menu } from '../Menu';
import { contextDB } from '../Provider';
import { connect } from 'react-redux';

import {
  Wrapper,
  MenuWrapper,
  ShadowWrapper,
  CustomResizable
} from './styled';

import { toggleMenu } from '../../actions/app';

const useOrder = () => {
  const { db } = useContext(contextDB as any);
  const inmenu = { ...db.entries };
  const { menu } = db.config;
  const menuOrder = [];

  menu && menu.map((item) => {
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

const Sidebar = ({showMenu, toggleMenu }) => {
  const menuOrder = useOrder();
  const [width, setWidth] = useState(240);

  const handleResizable = (e, direction, ref, d) => {
    setWidth(width + d.width);
  };

  return (
    <React.Fragment>
      <ShadowWrapper showMenu={showMenu} onClick={toggleMenu} />
      <Wrapper showMenu={showMenu} >
        <CustomResizable
          minWidth={240}
          maxWidth={1000}
          enable={{ right: true }}
          size={{ width: width, height: '100vh' }}
          onResizeStop={handleResizable}
        >
          <MenuWrapper>
            <Menu entries={menuOrder} />
          </MenuWrapper>
        </CustomResizable>
      </Wrapper>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => {
    dispatch(toggleMenu());
  }
});

const SidebarHoc = connect(null, mapDispatchToProps)(Sidebar);

export { SidebarHoc as Sidebar };