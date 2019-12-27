import * as React from 'react';
import p from 'prop-types';

interface Props {
  variants: any;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>
};

Button.propTypes = {
  primary: p.bool
};