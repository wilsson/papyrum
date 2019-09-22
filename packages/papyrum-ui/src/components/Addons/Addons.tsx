import * as React from 'react';
import { useState } from 'react'; 
import Resizable  from 're-resizable';

export const Addons = () => {
  const [ height, setHeight ] = useState(400);
  console.log('height', height);
  const handleResizable = (e, direction, ref, d) => {
    setHeight(height + d.height);
  };
  return(
    <div style={{ border: "1px solid red"}}>
      <Resizable
        minHeight={40}
        maxHeight={600}
        enable={{
          top: true
        }}
        size= {{ width: '100%', height: height }}
        onResizeStop={handleResizable}
      >
        ADDONS
      </Resizable>
    </div>
  )
};