import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './entry.mdx';

let node = document.createElement('div');
document.body.appendChild(node);
const App = () => (
    <div>
        <Markdown />
        hola
    </div>
)
ReactDOM.render(
    <App />
, node)