const fs = require('fs');

const getNotes = () => "Your notes txt"

const listNotes = () => {
    const noteDetails = loadNotes();
    /*for (i=0; i< noteDetails.length ; i++){
        console.log ('Title ' + i + ' : ' + noteDetails[i].title)
    }*/
    noteDetails.forEach((note) =>  console.log ('Title: ' + note.title))
}

const addNotes = (title,body) => {
    
    const currNote = loadNotes()
    
    debugger

    currNote.push({
        title : title,
        body:body
    })
    debugger
    saveNotes(currNote)
}

const removeNotes = (title) =>  saveNotes(loadNotes().filter((node) => node.title !== title))

const saveNotes = (notes) => fs.writeFileSync('./notes.json', JSON.stringify(notes));
    
const loadNotes = function(){
    try{
        return JSON.parse((fs.readFileSync("notes.json")).toString());
    } catch(e){
        console.log("No File yet");
         return [];
    }
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes1 : listNotes
}
/*const addNotes = function(title,body){
    const curreNote = loadNotes();
    curreNote.push({
        title : title,
        body:body
    })
    const saveNotes1 = saveNotes(curreNote);
    console.log("Inside add Notes 1" + JSON.stringify(curreNote));
}*/
//const removeNotes = function(title){
    //const notes = loadNotes();
    //const filteredNotes = notes.filter(function(node){
       // return node.title !== title;
    //})
    //saveNotes(filteredNotes);
//}

