import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import Search from './components/search';
import Header from './components/Header';

const App=()=>{

  const [notes,setNotes]= useState([{
    id:nanoid(),
    text:"This is my first note",
    date:"11/3/2022",

  },
  {
    id:nanoid(),
    text:"This is my second note",
    date:"11/3/2022",

  },
  {
    id:nanoid(),
    text:"This is my third note",
    date:"11/3/2022",

  },
 
]);


const [searchText,setSearchtext]=useState('');

const addNotes=(text)=>{
  const date=new Date();
  const nwNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()

  }

const newNotes=[...notes,nwNote];
setNotes(newNotes);
}


const deleteNotes=(id)=>{
  const newN= notes.filter((note)=> note.id!==id)
  setNotes(newN);
}


const [darkmode,setDarkMode]=useState(false);


useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));

  if(savedNotes){
    setNotes(savedNotes);
  }
},[])

useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes]);

  return(
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleDarkMode={setDarkMode}/>
      <Search  handleSearch={setSearchtext}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}  handleNote={addNotes}
      handleDelete={deleteNotes}
      />
    </div>
    </div>
  )
}

export default App