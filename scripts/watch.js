#!/usr/bin/env node
process.env.FORCE_COLOR = 3;

const shell = require('shelljs');
const tools = require('./tools.js');

const { argv } = require('yargs')
  // Set up --help documentation.
  // You can view these by running `npm run watch -- --help`.
  .usage('Usage: npm watch -- [options]')
  .example([
    ['npm run watch', '(compile all components)'],
    ['npm run watch -- pfe-card', '(compile one component)'],
    ['npm run watch -- pfe-card pfe-band', '(compile multiple components)'],
    ['npm run watch -- --build', '(compile assets before running watch)'],
  ])
  .options({
    build: {
      default: false,
      alias: 'b',
      describe: 'build the component(s) prior to running watch',
      type: 'boolean',
    },
  });

// Arguments with no prefix are added to the `argv._` array.
const components = argv._.length > 0 ? tools.validateElementNames(argv._) : [];

// Build out the lerna command for watch
const watch = tools.lernaRun('watch', components);

// Set up the commands to be run in parallel
let parallel = []; let serial = [];
if (argv.build) serial = [tools.lernaRun('build', components)].concat(parallel);
parallel = parallel.concat(['start', watch]);

// Run the watch task for each component in parallel, include dependencies
shell.exec(
  `./node_modules/.bin/npm-run-all${
    serial.length > 0 ? ` --serial ${serial.map(cmd => `"${cmd}"`).join(' ')}` : ''}${
    parallel.length > 0 ? ` --parallel ${parallel.map(cmd => `"${cmd}"`).join(' ')}` : ''}`, code => process.exit(code));
