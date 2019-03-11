import { metadata } from '../src/metadata';

describe('Metadata transform to object', () => {
    it('matches key and value', () => {
        const expected = [{ key: 'name', value: 'Guide' }];
        const mockup = `
            ---
            name: Guide
            ---
        `;
        expect(metadata(mockup))
            .toEqual(expect.arrayContaining(expected));
    });
});