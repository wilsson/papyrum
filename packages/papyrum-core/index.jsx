import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const req = require.context('./', false, /\.(mdx)$/);

const files = req.keys().map(r => ({component:req(r).default, name:r}));

const cleanTitle = (title) => title.replace('./', '');

const createPath = (pos) => pos===0 ? '/' : `/${pos}`;

const App = () => (
    <BrowserRouter>
        <div className='wrapper'>
            <ul className='sidebar'>
                {files.map((file, i)=> (
                    <li key={i}>
                        <NavLink exact activeStyle={{color:'black'}} to={ createPath(i) }>
                            {cleanTitle(file.name)}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <article className='content'>
                {files.map((file, i) => <Route exact key={i} path={ createPath(i) } component={file.component} />)}
            </article>
        </div>
    </BrowserRouter>
)

const node = document.createElement('div');
document.body.appendChild(node);

ReactDOM.render(<App />, node);



