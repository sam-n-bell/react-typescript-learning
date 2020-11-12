import {Action} from '../actions';
import {GET_MOVIE, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE} from '../actions/movies';
import { MovieType } from '../models/movies'

export type MoviesState = {
    currentMovie: {id: number, title: string},
    all: MovieType[],
    error: string
}
const initalState = {
    currentMovie: {id: -1, title: ""},
    all: [],
    error: ""
}
export const moviesReducer = (state: MoviesState = initalState, action: Action) => {
    switch (action.type) {
        case GET_MOVIE: {
            return {
                ...state,
                currentMovie: initalState.currentMovie,
                error: ""
            }
        }
        case GET_MOVIE_SUCCESS: {
            return {
                ...state,
                currentMovie: action.payload,
                error: ""
            }
        }
        case GET_MOVIE_FAILURE: {
            return {
                ...state,
                currentMovie: initalState.currentMovie,
                error: ""
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


