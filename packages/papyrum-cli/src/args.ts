
export const args = (yargs): any => {
    yargs
        .positional('port', {
            describe: 'port to bind on',
            default: 3000
        })
}