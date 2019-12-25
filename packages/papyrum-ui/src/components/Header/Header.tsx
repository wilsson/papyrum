import * as React from 'react';
import { useContext } from 'react';
import { Wrapper, WrapperTitle } from './styled';
import Switch from "react-switch"
import { connect } from 'react-redux';
import { contextDB } from '../Provider';
import { toggleDarkMode, toggleMenu } from '../../actions/app';
import { Menu } from 'react-feather';

import * as sunIcon from "../../assets/svg/sun-icon.svg"
import * as moonIcon from "../../assets/svg/moon-icon.svg"

const Header = ({ isDark, toggleTheme, toggleMenu }) => {
  const { db } = useContext(contextDB as any);
  return(
    <Wrapper>
      <WrapperTitle>
        <Menu size="20" onClick={toggleMenu} />
        {db.config.title}
      </WrapperTitle>
      <Switch
        offColor={"#5C6975"}
        onColor={"#5C6975"}
        height={24}
        width={50}
        onChange={() => {
          toggleTheme();
        }}
        checkedIcon={<img style={{ width: 26 }} src={moonIcon} alt="moon icon" />}
        uncheckedIcon={<img style={{ width: 26 }} src={sunIcon} alt="sun icon" />}
        checked={isDark}
      />
    </Wrapper>
  )
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

const HeaderHoc = connect(mapStateToProps, mapDispatchToProps)(Header);

export { HeaderHoc as Header };