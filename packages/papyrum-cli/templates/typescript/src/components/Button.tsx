import * as React from 'react';
import * as p from 'prop-types';

const Button = ({ children }) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  variant: p.oneOf(['primary', 'secondary']),
};

export default Button;