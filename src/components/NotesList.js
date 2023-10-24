import Note from "./Note"
import AddNode from "./newNote";

const NotesList=({notes,handleNote,handleDelete})=>{
    return(
         <div className="notes-list">
            {notes.map((notes)=>(<Note 
            key={notes.id} 
            id={notes.id} 
            text={notes.text} 
            date={notes.date}
            handleDelete={handleDelete}
            />))}<AddNode handleNote={handleNote}  />
            

         </div>
    )
};


export default NotesList;