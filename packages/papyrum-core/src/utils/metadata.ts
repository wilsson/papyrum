interface MetadataModel {
    key?: string;
    value?: string;
};

const removeSpace = (str: string) => str.replace(/\s+/g, '');

const metadata = ['name', 'route'];

export const getMetadata = (content: string): MetadataModel[] | [] => {
    const comment = content.match(/---([^-]+)---/);
    const objectResults = [];
    if (comment) {
        const lines = comment[1].split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (/\:/.test(lines[i])) {
                const [key, value] = lines[i].split(':');
                const newKey = removeSpace(key);
                const newValue = removeSpace(value);
                if (!metadata.includes(newKey)) continue;
                objectResults.push({
                    key: newKey,
                    value: newValue
                });
            }
        }
    }
    return objectResults;
}