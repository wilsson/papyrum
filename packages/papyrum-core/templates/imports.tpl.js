export const imports = {
    <% entries.forEach(function (entry, i) { %>
    '<%= entry.path %>': () => {
        return import(/* webpackPrefetch: true, webpackChunkName: "<%= entry.nameChunk %>" */'../<%= entry.path %>');
    },
    <% }) %>
}