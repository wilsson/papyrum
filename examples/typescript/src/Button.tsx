import * as React from 'react';

interface Props {
  variants: any;
}

export const Button: React.FC<Props> = ({ children }) => {
    return <button>{children}</button>
};