#!/usr/bin/env node

const actions = require('./actions');

if (!module.parent) {
    const cssUrl = 'https://www.epam.com/etc/clientlibs/foundation/main.min.fc69c13add6eae57cd247a91c7e26a15.css';

    const {action, file, path} = require('yargs')
        .usage('Usage: $0 [options]')
        .alias('h', 'help')    
        .option('action', {
            alias: 'a',
            demandOption: true,
            requiresArg: true,
            description: 'action to trigger',
            type: 'string',
            choices: Object.keys(actions)
        })
        .option('file', {
            alias: 'f',
            demandOption: false,
            requiresArg: true,
            description: 'path to file',
            type: 'string',
            implies: 'action'
        })
        .option('path', {
            alias: 'p',
            demandOption: false,
            requiresArg: true,
            description: 'path to css assets',
            type: 'string',
            implies: 'action'
        })
        .help('h')
        .argv;

    actions[action](file, path, cssUrl);
}

module.exports = actions;