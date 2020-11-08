import {createStore} from 'redux';
import { notesReducer } from './reducers/notes'

export const store = createStore(notesReducer)