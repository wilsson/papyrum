'use strict';

const papyrumCore = require('./../dist');

console.log(papyrumCore);

describe('papyrum-core', () => {
    it('needs tests');
});

describe('Metadata transform to object', () => {
    it('matches key and value', () => {
        const expected = [{key: 'clave', value: 'valor'}];
        const mockup = `
            ---
            clave: valor
            ---
        `;
        expect(papyrumCore.Metadata(mockup))
            .toEqual(expect.arrayContaining(expected));
    });

})