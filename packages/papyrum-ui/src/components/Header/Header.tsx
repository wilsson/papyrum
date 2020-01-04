import * as React from 'react';
import { useContext } from 'react';
import { Wrapper, WrapperTitle, LogoWrapper, HomePageLink, HamburgerIcon } from './styled';
import Switch from "react-switch"
import { connect } from 'react-redux';
import { contextDB } from '../Provider';
import { toggleDarkMode, toggleMenu, changeRoute } from '../../actions/app';
import { useBaseUrl } from '../../utils';

import * as sunIcon from "../../assets/svg/sun-icon.svg"
import * as moonIcon from "../../assets/svg/moon-icon.svg"

const Header = ({ isDark, toggleTheme, toggleMenu, handleChangeRoute }) => {
  const { db: { config } } = useContext(contextDB as any);
  return(
    <Wrapper>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <HamburgerIcon size="20" onClick={toggleMenu} tabindex="0" />
        <WrapperTitle to="/" onClick={() => handleChangeRoute('/') }>
          {config.logo && (
            <LogoWrapper>
              <img src={useBaseUrl(config.logo)} />
            </LogoWrapper>
          )}
          {config.title}
        </WrapperTitle>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <HomePageLink href={config.homepage} target="__blank">GitHub</HomePageLink>
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
     </div>
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
  },
  handleChangeRoute: (route: string) => {
    dispatch(changeRoute(route));
  }
});

const HeaderHoc = connect(mapStateToProps, mapDispatchToProps)(Header);

export { HeaderHoc as Header };