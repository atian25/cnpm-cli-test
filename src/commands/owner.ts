import axios from 'axios';
import yargs from 'yargs';

const fetchOwnerDetails = async (packageName: string) => {
  try {
    const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
    const maintainers = response.data.maintainers;
    console.log(`Owners of ${packageName}:`);
    maintainers.forEach((maintainer: { name: string; email: string }) => {
      console.log(`${maintainer.name} <${maintainer.email}>`);
    });
  } catch (error) {
    console.error(`Failed to fetch owner details for ${packageName}:`, error);
  }
};

// Implement the `owner ls` command using `yargs` to print owner details of a package.
yargs.command({
  command: 'owner ls <package>',
  describe: 'Fetch and print package owner details from the npm registry',
  builder: (yargs) => yargs.positional('package', {
    describe: 'Package name',
    type: 'string',
  }),
  handler: (argv) => {
    if (typeof argv.package === 'string') {
      fetchOwnerDetails(argv.package);
    }
  },
}).help();
