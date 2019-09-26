import * as React from 'react';
import { useState, useContext } from 'react';
import { Layers } from 'react-feather';
import { Dropdown } from '../Dropdown';
import { contextDB, Context } from '../Provider/context';

import {
  Label,
  TabWrapper,
  RightWrapper,
  TabItem,
  IconWrapper,
  Separator
} from './styled';

interface Props {
  listStates: string[];
  setStateSelected(state: string): void;
  setActivePanel(panel: string): void;
  activePanel: string;
  handleChangeCode(state: string): void;
}

const getStatus = (entries, routeActive: string): string => {
  const [ document ] = entries.filter(({ route }) => route === routeActive);
  return document.status;
}
export const Toolbar: React.FC<Props> = ({
  listStates,
  setStateSelected,
  setActivePanel,
  activePanel,
  handleChangeCode
}) => {
  const { routeActive, db } = useContext<Context>(contextDB);
  const status = getStatus(Object.values(db.plain), routeActive)
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
          <React.Fragment>
            <Separator />
            <IconWrapper onClick={(e) => setShow(!show)}>
              <Layers size={15} color="#5B5B5B" />
              {show && (
                <Dropdown list={listStates} onClick={(state) =>{
                  setStateSelected(state);
                  handleChangeCode(state);
                }}/>
              )}
            </IconWrapper>
          </React.Fragment>
        )}
      </RightWrapper>
      <div>
        <Label status={status}>{status}</Label>
      </div>
    </TabWrapper>
  )
};