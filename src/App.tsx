import React from 'react';
import './App.css';
import { Name } from './components/name'
import { NameEdit } from './components/nameEdit'
import { NewNoteInput } from './components/NewNoteInput'
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './store/reducers/notes'
import { ADD_NOTE, REMOVE_NOTE } from './store/actions/notes';
import { MovieCard } from './components/movies/MovieCard'
import { Navigation } from './components/navigation/Navigation';
import { Row, Col, Container } from 'react-bootstrap'

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

  const numCards = [1,2,3,4]
  return (
    <div>
      <Navigation/>
      <Container fluid>
        <Row>
          {numCards.map((card) => {
            return <Col><MovieCard /></Col>
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
