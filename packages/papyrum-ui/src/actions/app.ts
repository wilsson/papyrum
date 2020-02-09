import * as actionTypes from "../actionTypes";

export const toggleDarkMode = () => ({
  type: actionTypes.DARKMODE
});

export const toggleMenu = () => ({
  type: actionTypes.SHOW_MENU
});

export const changeRoute = (route: string) => ({
  type: actionTypes.CHANGE_ROUTE,
  payload: route
})


export const changeRouteHeading = (route: string) => ({
  type: actionTypes.CHANGE_ROUTE_HEADING,
  payload: route
})