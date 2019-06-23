import { build as webpack} from '@papyrum/core';

export const build = async (argv) => {
  webpack(argv);
}