interface MetadataModel {
    key?: string;
    value?: string;
};

const removeSpace = (str: string) => str.replace(/\s+/g, '');

export const metadata = (content: string): MetadataModel[] | [] => {
    const comment = content.match(/---([^-]+)---/);
    const objectResults = [];
    if (comment) {
        const lines = comment[1].split('\n');
        lines.forEach((line) => {
            if (/\:/.test(line)) {
                const val = line.split(':');
                objectResults.push({
                    key: removeSpace(val[0]),
                    value: removeSpace(val[1])
                });
            }
        });
    }
    return objectResults;
}