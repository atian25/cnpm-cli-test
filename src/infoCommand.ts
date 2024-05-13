import axios from 'axios';

const fetchPackageInfo = async (packageName: string) => {
  try {
    const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
    console.log(response.data);
  } catch (error) {
    console.error(`Failed to fetch package info for ${packageName}:`, error);
  }
};

export default fetchPackageInfo;
