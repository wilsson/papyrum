import { H1, H2, H3, H4, H5, H6 } from './components/H';
import { P } from './components/P';
import { Ul, Ol } from './components/Ul';
import { Code } from './components/Code';
import { A } from './components/A';
import { Blockquote } from './components/Blockquote';
import { Table, TableRow, TableTd, TableTh } from './components/Table';
import { InlineCode } from './components/InlineCode';
import { Img } from './components/Img';

export { Header } from './components/Header'; 
export { Addons } from './components/Addons';
export { DevZone } from './components/DevZone';
export { Provider, contextDB, stateForComponentState, DB, Context } from './components/Provider';
export { CodeWrapperStyled } from './components/Code';
export { CodeBar } from './components/CodeBar';
export { Highlight } from './components/Highlight';
export { Sidebar } from './components/Sidebar';
export { fontFace } from './utils/fonts';
export { Toolbar } from './components/Toolbar';
export { Table, TableRow, TableTd, TableTh } from './components/Table';
export { AStyled } from './components/A';
export { Dropdown } from './components/Dropdown';
export { light as lightTheme, dark as darkTheme  } from './themes';
export { store } from './store';

export const components = {
  Img,
  InlineCode,
  Table,
  TableRow,
  TableTd,
  TableTh,
  Blockquote,
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Code,
  Ul,
  Ol
};