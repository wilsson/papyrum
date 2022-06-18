import { getConfig } from './config.build';
import { init } from '../init';
import * as webpack from 'webpack';
import * as formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import * as reporter from 'react-dev-utils/FileSizeReporter';

const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = reporter;

export const build = async argv => {
  await init(argv);
  const config = getConfig(argv);
  const compiler = webpack(config as any);
  compiler.run((err, stats) => {
    if(err) return;
    
    const messages = formatWebpackMessages(stats.toJson({}))
    if(messages.errors.length) {
      console.log(messages.errors.join('\n\n'));
      process.exit();
    }

    if(messages.warnings.length) {
      console.log(messages.warnings.join('\n\n'));
    };
    console.log('\nBuild success');

    measureFileSizesBeforeBuild(argv.dest).then(previousFileSizes => {
      printFileSizesAfterBuild(stats, previousFileSizes, argv.dest);
    });
  })
};