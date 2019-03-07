'use strict';

const { Metadata } = require('./../dist');

describe('Metadata transform to object', () => {
    it('matches key and value', () => {
        const expected = [{key: 'clave', value: 'valor'}];
        const mockup = `
            ---
            clave: valor
            ---
        `;
        expect(Metadata(mockup))
            .toEqual(expect.arrayContaining(expected));
    });
});