import * as React from 'react';
import { memo, useMemo } from 'react';
import {
  Menu,
  ZoomIn,
  ZoomOut,
  Layout,
  Camera,
  Layers,
  Moon,
  Maximize
} from 'react-feather';

import {
  Wrapper,
  Link,
  LinkMenu,
  WrapperActions,
  LinkAction,
  Separate
} from './styled';

const { useState } = React;
import { List } from '../List';

export const TabNoMemo = ({
  handleShowMenu,
  handleChangeTab,
  tab,
  useCases,
  setUseCase
}) => {
  console.log('renderTab');
  const [ open, setOpen ] = useState(false);
  return(
    <>
      <Wrapper>
        <LinkMenu>
          <Menu size={20} onClick={() => handleShowMenu() }/>
        </LinkMenu>
        <Link active={tab === 'docs'} onClick={() => handleChangeTab('docs')}>Docs</Link>
        <Link active={tab === 'development'} onClick={() => handleChangeTab('development')}>Development</Link>
      </Wrapper>
      {tab === 'development' && <WrapperActions>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <LinkAction action="zoom-in">
            <ZoomIn size={20} />
          </LinkAction>
          <LinkAction action="zoom-out">
            <ZoomOut size={20} />
          </LinkAction>
          <Separate />
          <LinkAction>
            <Layout size={20} />
          </LinkAction>
          <Separate />
          <LinkAction>
            <Camera size={20} />
          </LinkAction>
        </div>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <LinkAction onClick={() => setOpen(!open)}>
            <Layers size={20} />
            {(useCases && open) && (
              <List useCases={useCases} handleClick={(key) => {
                setUseCase(key);
              }}/>
            )}
          </LinkAction>
          <Separate />
          <LinkAction>
            <Moon size={20} />
          </LinkAction>
          <Separate />
          <LinkAction>
            <Maximize size={20} />
          </LinkAction>
        </div>
      </WrapperActions>}
    </>
  );
}

//export const Tab = memo(TabNoMemo);
export const Tab = TabNoMemo;