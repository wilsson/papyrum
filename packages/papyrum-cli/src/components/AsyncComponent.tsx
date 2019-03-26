import * as React from 'react';

export const getAsyncComponents = imports => {
    return Object.keys(imports).map(key => React.lazy(imports[key]));
}