import { combineReducers } from 'redux'
import { notesReducer } from './notes';
import { MoviesState, moviesReducer } from './movies';

export type RootState = {
    movies: MoviesState
}

const reducers = combineReducers({
  notes: notesReducer,
  movies: moviesReducer
});

export default reducers;