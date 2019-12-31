import * as React from 'react';
import * as p from 'prop-types';

interface Props {
  primary: any;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>
};

Button.propTypes = {
  primary: p.bool
};