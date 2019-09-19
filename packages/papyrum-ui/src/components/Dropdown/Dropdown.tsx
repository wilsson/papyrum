import * as React from 'react';
import {
  Wrapper,
  Triangle,
  List
} from './styled';

interface Props {
  list: string[];
  onClick(state: string): void;
}

export const Dropdown: React.FC<Props> = ({ list, onClick }) => {
  const handleClick = (e, state: string) => {
    e.preventDefault();
    onClick(state);
  };
  return(
    <React.Fragment>
      {list.length > 0 && (
        <Wrapper>
          <Triangle />
          <List>
            {list.map((state: string, index) => (
              <li key={index} onClick={(e) => handleClick(e, state) }>{state}</li>
            ))}
          </List>
        </Wrapper>
      )}
    </React.Fragment>
  )
};