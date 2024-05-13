import axios from 'axios';
import yargs from 'yargs';

const fetchPackageInfo = async (packageName: string) => {
  try {
    const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
    console.log(response.data);
  } catch (error) {
    console.error(`Failed to fetch package info for ${packageName}:`, error);
  }
};

// Implement the `info` command using `yargs` to print package info from the npm registry.
yargs.command({
  command: 'info <package>',
  describe: 'Fetch and print package info from the npm registry',
  builder: (yargs) => yargs.positional('package', {
    describe: 'Package name',
    type: 'string',
  }),
  handler: (argv) => {
    if (typeof argv.package === 'string') {
      fetchPackageInfo(argv.package);
    }
  },
}).help();
