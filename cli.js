const { program } = require('commander');
const axios = require('axios');

program
  .version('1.0.0')
  .description('A CLI tool for fetching npm package info and owner details');

program
  .command('info <package>')
  .description('Print package info from npm registry')
  .action(async (package) => {
    try {
      const response = await axios.get(`https://registry.npmjs.org/${package}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching package info:', error.message);
    }
  });

program
  .command('owner <package>')
  .description('Print owner details of a package from npm registry')
  .action(async (package) => {
    try {
      const response = await axios.get(`https://registry.npmjs.org/${package}`);
      const maintainers = response.data.maintainers;
      console.log(`Owners of ${package}:`);
      maintainers.forEach(maintainer => console.log(maintainer.name));
    } catch (error) {
      console.error('Error fetching owner details:', error.message);
    }
  });

program.parse(process.argv);
