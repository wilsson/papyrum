import * as actionTypes from './../actionTypes';

interface State {
  darkmode: boolean,
  showMenu: boolean
}

const darkmode = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem("isDark")) : false;

const initialState: State = {
  darkmode,
  showMenu: false
};

export default (state: State = initialState, action: { type: string; }): State => {
  switch (action.type) {
    case actionTypes.DARKMODE:
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('isDark', '' + !state.darkmode);
      }
      return { ...state, darkmode: !state.darkmode }

    case actionTypes.SHOW_MENU:
      return { ...state, showMenu: !state.showMenu }
    default:
      return state;
  }
}