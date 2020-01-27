import * as actionTypes from './../actionTypes';

interface Action {
  type: string;
  payload?: any;
}

interface State {
  darkmode: boolean,
  showMenu: boolean
}

const darkmode = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem("isDark")) : false;

const initialState: State = {
  darkmode,
  showMenu: false
};

export default (state: State = initialState, action: Action): State => {
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
};


export const route = (state: string = 'location.pathname', action: Action): any => {
  switch(action.type) {
    case actionTypes.CHANGE_ROUTE:
      return action.payload
    default:
      return state;
  }
};