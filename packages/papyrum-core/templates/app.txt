import React from 'react';
import { hot } from 'react-hot-loader/root';
import Root from '@papyrum/cli';
import db from './db.json';
import { imports } from './imports';

const App = () => <Root db={db} imports={imports} />;

export default hot(App);