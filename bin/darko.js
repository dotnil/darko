#!/usr/bin/env node

var program = require('commander')
var pkg = require('../package')


program
  .version(pkg.version)
  .command('build', 'Build your site')
  .command('serve', 'Serve your site locally')
  .command('new', 'Creates a new Darko site scaffold')

program.on('--help', function() {
  console.log('  Examples:')
  console.log('')
  console.log('    $ darko build')
  console.log('    $ darko new myblog')
  console.log('')
})

program.parse(process.argv)
