import axios from 'axios';

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

export default fetchOwnerDetails;
