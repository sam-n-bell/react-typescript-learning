import React from 'react';
import './App.css';
import { Name } from './components/name'
import { NameEdit } from './components/nameEdit'
import { NewNoteInput } from './components/NewNoteInput'
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './store/reducers/notes'
import {ADD_NOTE, REMOVE_NOTE} from './store/actions/notes';
import { MovieCard } from './components/movies/MovieCard'

function App() {
  // type of state is Note, return type of useSelector
  const notesObj = useSelector<NotesState, NotesState["notes"]>((state) => state.notes) //parses state object and gets required field
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
        {/* {notes.map((note) => {
          return <li key={note}>{note}</li>
        })} */}
      </ul>
      <hr/>
      <MovieCard></MovieCard>
    </div>
  );
}

export default App;
