import { describe, expect, test } from '@jest/globals';
import fetchPackageInfo from '../src/commands/info';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { name: 'egg', version: '1.0.0' } })),
}));

describe('info command', () => {
  test('should fetch and display package info correctly', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    await fetchPackageInfo('egg');
    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ name: 'egg', version: '1.0.0' }));
    consoleSpy.mockRestore();
  });
});
