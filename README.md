# cnpm-cli-test

This CLI now supports printing package info and owner details for a specified package using the described commands:

```bash
# print package info of egg from npm registry
$ cnpm info egg

# print owner of egg package
$ cnpm owner ls egg
```

The CLI is implemented in TypeScript and utilizes the yargs library for parsing command-line arguments. Testing is conducted using jest to ensure functionality.

## New CLI Commands

The CLI has been updated to include new commands for `info` and `owner ls`, allowing users to fetch and display package information and owner details directly from the npm registry.

## Dependencies

The project now includes additional dependencies:
- `yargs` for parsing command-line arguments
- `ts-node` for executing TypeScript files directly
- `jest-ts` for running tests with TypeScript support

## Installation and Running Tests

To install the necessary dependencies, run:

```bash
npm install
```

To run the tests and verify the CLI commands, execute:

```bash
npm test
```
