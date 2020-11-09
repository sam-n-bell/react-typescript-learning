import {Action} from '../actions';
import {GET_MOVIE, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE} from '../actions/movies';
import { MovieType } from '../models/movies'

export type MoviesState = {
    currentMovie: null | {},
    all: MovieType[],
    error: string | null
}
const initalState = {
    currentMovie: {title: 'unknown'},
    all: [],
    error: null
}
export const moviesReducer = (state: MoviesState = initalState, action: Action) => {
    switch (action.type) {
        case GET_MOVIE: {
            return {
                ...state,
                currentMovie: {title: 'unknown'},
                error: null
            }
        }
        case GET_MOVIE_SUCCESS: {
            return {
                ...state,
                currentMovie: action.payload,
                error: null
            }
        }
        case GET_MOVIE_FAILURE: {
            return {
                ...state,
                currentMovie: {title: 'unknown'},
                error: null
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


