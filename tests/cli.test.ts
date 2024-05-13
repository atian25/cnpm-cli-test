import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

describe('CLI Tests', () => {
  test('info command should fetch package info', async () => {
    const { stdout } = await execPromise('ts-node src/cli.ts info egg');
    expect(stdout).toContain('name: \'egg\'');
  });

  test('owner ls command should fetch owner details', async () => {
    const { stdout } = await execPromise('ts-node src/cli.ts owner ls egg');
    expect(stdout).toContain('Owners of egg:');
  });
});
