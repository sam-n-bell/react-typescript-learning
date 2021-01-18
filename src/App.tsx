import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './store/reducers/notes';
import { ADD_NOTE, REMOVE_NOTE } from './store/actions/notes';
import { Row, Col, Container } from 'react-bootstrap';
import { DataTable } from './components/table-test/DataTable';

function App() {
  // type of state is Note, return type of useSelector
  const notesObj = useSelector<NotesState, NotesState["notes"]>((state) => state.notes) //parses state object and gets required field
  const dispatch = useDispatch()

  const addNote = (note: string) => {
    dispatch({ type: ADD_NOTE, payload: note })
  }

  const removeNote = (note: string) => {
    dispatch({ type: REMOVE_NOTE, payload: note })
  }

  const numCards = [1, 2, 3, 4]
  return (
    <div>
      {/* <Grid container spacing={3}> */}
        {/* <Grid item xs={4}>
          {numCards.map((card) => {
            // return <MovieCard key={card}/>
            return <Paper key={card}>xs</Paper>
          })}
        </Grid> */}
      <DataTable/>
    </div>
  );
}

export default App;
