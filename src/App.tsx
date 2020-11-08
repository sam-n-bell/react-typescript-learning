import React from 'react';
import './App.css';
import { Name } from './components/name'
import { NameEdit } from './components/nameEdit'
import { NewNoteInput } from './components/NewNoteInput'
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './store/reducers/notes'
import {ADD_NOTE, REMOVE_NOTE} from './store/actions/notes';

function App() {
  // type of state is Note, return type of useSelector
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes) //parses state object and gets required field
  const dispatch = useDispatch()

  const addNote = (note: string) => {
    dispatch({type: ADD_NOTE, payload: note})
  }

  const removeNote = (note: string) => {
    dispatch({type: REMOVE_NOTE, payload: note})
  }

  return (
    <div>
      <NewNoteInput addNote={addNote} removeNote={removeNote}/>
      <hr/>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
