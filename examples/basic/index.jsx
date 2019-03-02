import React from 'react';
import ReactDOM from 'react-dom';
import Md from './demo.mdx'

console.log('hola', ReactDOM);
let node = document.createElement('div');

document.body.appendChild(node);

ReactDOM.render(
    <div>hola
        <Md />
    </div>,
    node
)