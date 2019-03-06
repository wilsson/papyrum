interface MetadataModel {
    key?: string;
    value?: string;
};

export const Metadata = (content:string):MetadataModel[]|[] => {
    const comment = content.match(/---([^-]+)---/);
    const objectResults = [];
    if(comment) {
        const items = comment[1].match(/\n/);
        items.forEach((item)=> {
            const val = item.split(':');
            objectResults.push({key: val[0], value: val[1]})
        });
    }
    return objectResults;
}