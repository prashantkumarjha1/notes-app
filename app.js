const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');
const { removeNotes } = require('./notes.js');

//Create args command
yargs.command({
    command: 'add',
    describe: 'Add note',
    builder:{
        title : {
            describe: "Notes Title",
            demandOption:true,
            type: "string"
        },
        body : {
            describe: "Body of notes",
            demandOption:true,
            type: "string"
        }
    },
    handler: (argv) => notes.addNotes(argv.title,argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder:{
        title : {
            describe: "Notes Title",
            demandOption:true,
            type: "string"
        }
    },
    handler: (argv) => notes.removeNotes(argv['title'])
    
})
yargs.command({
    command : "list",
    describe : "List note",
    handler : () => notes.listNotes1()
    
})
//add, remove, read, list
yargs.parse();


