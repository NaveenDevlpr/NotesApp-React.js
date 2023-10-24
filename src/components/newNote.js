import { useState } from "react";

const AddNode=({handleNote})=>{

    const [newText,setText]=useState('');

    const charLimit=200;

    const handleChange=(event)=>{
        if(charLimit-event.target.value.length>=0)
           setText(event.target.value);
    }

    const handleSaveClick=()=>{
        if(newText.trim().length>0){
            handleNote(newText);
            setText('');
        }
       
    }
    return (
        <div className="note new">
            <textarea 
             rows="8" 
             cols="10"
             placeholder="Type to add a new note"
             value={newText}
             onChange={handleChange}
             >
             </textarea>
             <div className="NoteFooter">
                <small>{charLimit-newText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
             </div>
        </div>
    )
}


export default AddNode;