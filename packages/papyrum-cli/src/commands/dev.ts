import { server, init } from '@papyrum/core';
import * as  chokidar from 'chokidar';

export const dev = async (argv) => {
  await init(argv);
  server(argv);
  const watch = chokidar.watch(['**/*.{md,mdx}', '**/*.{ts,tsx,js,jsx,}'], {
    ignored: 'node_modules'
  });

  watch.on('change', async (path) => {
    init(argv);
  });
};