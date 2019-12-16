import * as React from 'react';
import { useContext } from 'react';
import { Wrapper} from './styled';
import Switch from "react-switch"
import { connect } from 'react-redux';
import { contextDB } from '../Provider';
import { toggleDarkMode } from '../../actions/app';

import * as sunIcon from "../../assets/svg/sun-icon.svg"
import * as moonIcon from "../../assets/svg/moon-icon.svg"

const Header = ({ isDark, toggleTheme }) => {
  const { db } = useContext(contextDB as any);
  return(
    <Wrapper>
      {db.config.title}
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
  }
});

const HeaderHoc = connect(mapStateToProps, mapDispatchToProps)(Header);

export { HeaderHoc as Header };