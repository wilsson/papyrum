
import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import * as ReactDOMServer from 'react-dom/server';

// @ts-ignore
import * as App from 'app';

console.log('app', App.default);
export default (locals) => {
  const context = {};
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={'/'} context={context} >
      <App.default />
    </StaticRouter>
  );
  console.log('appHtml', appHtml);
  return '<html>' + appHtml + '</html>';
};