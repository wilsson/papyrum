import React from 'react';
import p from 'prop-types';

const Button = ({ children }) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  variant: p.oneOf(['primary', 'secondary']),
};

export default Button;