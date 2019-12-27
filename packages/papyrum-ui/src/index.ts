import { H1, H2, H3, H4, H5, H6 } from './components/H';
import { P } from './components/P';
import { Ul, Ol } from './components/Ul';
import { Code } from './components/Code';
import { A } from './components/A';
import { Blockquote } from './components/Blockquote';
import { Table, TableRow, TableTd, TableTh } from './components/Table';
import { InlineCode } from './components/InlineCode';
import { Img } from './components/Img';
import { Hr } from './components/Hr';

export { Header } from './components/Header'; 
export { Provider, contextDB, DB, Context } from './components/Provider';
export { Highlight, styles, Copy, Wrapper as CodeWrapper } from './components/Highlight';
export { Sidebar } from './components/Sidebar';
export { fontFace } from './utils/fonts';
export { Table, TableRow, TableTd, TableTh } from './components/Table';
export { AStyled } from './components/A';
export { light as lightTheme, dark as darkTheme  } from './themes';
export { store } from './store';

export { toggleDarkMode, toggleMenu, changeRoute  } from './actions';

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
  Ol,
  Hr
};