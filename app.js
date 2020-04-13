const yargs = require("yargs");
const importfile = require('./file.js')


yargs.version('2.1.0')

yargs.command({
    command : 'add',
    describe : 'adding items on the list',
    builder : {
            title :{
                describe : 'Note title is ',
                demandOption : true,
                type : 'string',
            },
            body : {
                describe : 'body describe',
                demandOption : true,
                type : 'string',
            }
    },
      handler(argv){
        debugger
       importfile.addnotes(argv.title, argv.body);
      
      }
})

yargs.command({
    command : 'remove',
    describe : 'removing items on the list',
    builder : {
      title :{
          describe : 'remove notes 👏',
          demandOption : true,
          type : 'string',
      }},
      handler(argv){
        importfile.removenotes(argv.title);
      }    
})

yargs.command({
     command : 'list',
     describe : 'List command is used to show the items',
     handler(){
       importfile.listnotes();
     }

})
yargs.command({
    command : 'read',
    describe : 'reading items on the list',
    builder :{
      title:{
        describe : 'to read a notes',
        demandOption : true,
        type : 'string'
      }
    },
    handler(args){
       importfile.readnotes(args.title)
    }
})


// console.log(yargs.argv)
yargs.parse();
