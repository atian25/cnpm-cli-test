import { describe, expect, test } from '@jest/globals';
import fetchOwnerDetails from '../src/commands/owner';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: {
      maintainers: [
        { name: 'testuser', email: 'testuser@example.com' }
      ]
    }
  })),
}));

describe('owner ls command', () => {
  test('should fetch and display owner details correctly', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    await fetchOwnerDetails('egg');
    expect(consoleSpy).toHaveBeenCalledWith('Owners of egg:');
    expect(consoleSpy).toHaveBeenCalledWith('testuser <testuser@example.com>');
    consoleSpy.mockRestore();
  });
});
