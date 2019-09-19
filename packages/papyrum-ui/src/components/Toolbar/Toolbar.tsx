import * as React from 'react';
import { useState, useContext } from 'react';
import { Layers } from 'react-feather';
import { Dropdown } from '../Dropdown';

import {
  Label,
  TabWrapper,
  RightWrapper,
  LeftWrapper,
  TabItem,
  IconWrapper,
  Separator
} from './styled';

interface Props {
  listStates: string[];
  setStateSelected(state: string): void;
  setActivePanel(panel: string): void;
  activePanel: string;
}

export const Toolbar: React.FC<Props> = ({
  listStates,
  setStateSelected,
  setActivePanel,
  activePanel
}) => {
  const [ show, setShow ] = useState(false);
  return(
    <TabWrapper>
      <RightWrapper>
        <TabItem
          onClick={() => setActivePanel('docs') }
          active={activePanel === 'docs'}
        >
          Docs
        </TabItem>
        <TabItem
          onClick={() => setActivePanel('development')}
          active={activePanel === 'development'}
        >
          Development
        </TabItem>
        {activePanel === 'development' && (
          <>
            <Separator />
            <IconWrapper onClick={(e) => setShow(!show)}>
              <Layers size={15} color="#5B5B5B" />
              {show && (
                <Dropdown list={listStates} onClick={(state) => setStateSelected(state) }/>
              )}
            </IconWrapper>
          </>
        )}
      </RightWrapper>
      <LeftWrapper>
        <Label>Ready</Label>
      </LeftWrapper>
    </TabWrapper>
  )
};