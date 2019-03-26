import * as React from 'react';
import { SidebarWrapper } from '@papyrum/ui';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { getAsyncComponents } from './AsyncComponent';
const { Suspense } = React;

export const Root = ({ db, imports }) => {
    const components = getAsyncComponents(imports);
    return(
        <SidebarWrapper>
            <BrowserRouter>
                <div className='wrapper'>
                    <ul className='sidebar'>
                        {Object.keys(db.entries).map((entry, i) => (
                            <li key={i}>
                                <NavLink
                                    exact
                                    activeStyle={{color:'black'}}
                                    to={db.entries[entry].route } >
                                    {db.entries[entry].name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <article className='content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        {Object.keys(db.entries).map((entry, i) => (
                            <Route
                                key={i}
                                exact
                                path={db.entries[entry].route}
                                component={components[i]} />
                        ))}
                    </Suspense>
                    </article>
                </div>
            </BrowserRouter>
        </SidebarWrapper>
    )
}