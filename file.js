const fs = require('fs')
const chalk = require('chalk')

// ? add
let addnotes = (title , body) =>{
    let data  = readdata();
    // let dubli = data.filter(args => args.title === title)
    let dublii = data.find(args => args.title === title)
    debugger
    if(!dublii){
        data.push({
            title : title,
            body  : body,
        })
    savenotes(data)
    }else{
        console.log(chalk.red.inverse('unsuccess') , 'dublicate data found');
    }
  
}


let savenotes = (data) =>{
    data = JSON.stringify(data);
    fs.writeFileSync('data.json',data)  
    console.log(chalk.green.inverse('sucess'))
}

let readdata = function (){
 try{ 
        let databuff = fs.readFileSync('data.json');
        let data = databuff.toString();
       return JSON.parse(data);
        
    } catch (error){
        return [];
    }
}
// ! remove notes
let removenotes = (title) =>{
 let data = readdata();
 let indata = data.filter(args=> args.title !== title)
 if(indata.length < data.length){
        savenotes(indata)
 }else{
     console.log(chalk.red.inverse('No data found from your title'))
 }
}


//! list notes
let listnotes = () => {
    let data = readdata();
    console.log(chalk.white.inverse('Your notes are :- '))
    data.forEach(args => console.log(args.title))
}

//!readnotes
let readnotes = (note) =>{
    notedata = readdata();
     notedata = notedata.find(args => args.title === note);
     if(notedata){
        console.log(chalk.white.inverse(notedata.title))
    console.log(notedata.body ,'\n')  
     }else{
         console.log(chalk.red.inverse(`NO data found on ${note}`))
     }
   
}



module.exports={
 addnotes : addnotes,
 removenotes : removenotes,
 listnotes : listnotes,
 readnotes : readnotes,
}