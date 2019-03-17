import { getMetadata } from '../src/utils/metadata';

describe('Metadata transform to object', () => {
    it('matches key and value', () => {
        const expected = [{ key: 'route', value: '/Guide' }];
        const mockup = `
            ---
            route: /Guide
            other: foo
            ---
        `;
        expect(getMetadata(mockup))
            .toEqual(expect.arrayContaining(expected));
    });
});