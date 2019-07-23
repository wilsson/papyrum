import * as React from 'react';
import {
  Wrapper,
  Item,
  Arrow,
  Symbol
} from './styled';

export const List = ({ useCases, handleClick }) => {
  return(
    <Wrapper>
      <Arrow />
      <div>
        {useCases.map((useCase, key) => (
          <Item
            key={key}
            onClick={() => handleClick(key) }
          >
            <Symbol>S</Symbol>
            {useCase.name}
          </Item>
        ))}
      </div>
    </Wrapper>
  );
};