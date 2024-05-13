import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import infoCommand from './infoCommand';
import ownerCommand from './ownerCommand';

yargs(hideBin(process.argv))
  .command({
    command: 'info <package>',
    describe: 'Fetch and print package info from the npm registry',
    builder: (yargs) => yargs.positional('package', {
      describe: 'Package name',
      type: 'string',
    }),
    handler: (argv) => {
      if (typeof argv.package === 'string') {
        infoCommand(argv.package);
      }
    },
  })
  .command({
    command: 'owner ls <package>',
    describe: 'Fetch and print package owner details from the npm registry',
    builder: (yargs) => yargs.positional('package', {
      describe: 'Package name',
      type: 'string',
    }),
    handler: (argv) => {
      if (typeof argv.package === 'string') {
        ownerCommand(argv.package);
      }
    },
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
