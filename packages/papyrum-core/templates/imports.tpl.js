export const imports = {
    <% entries.forEach(function (entry, i) { %>
    '<%= entry.path %>': () => {
        return import(/* webpackChunkName: "<%= entry.nameChunk %>" */'../<%= entry.path %>');
    },
    <% }) %>
}