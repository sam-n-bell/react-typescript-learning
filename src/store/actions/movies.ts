import axios from 'axios';
import { Dispatch } from 'redux';
import { MovieResponse } from '../models/movies'

export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_FAILURE = 'GET_MOVIE_FAILURE';
export const GET_MOVIES = 'GET_MOVIES';


export const getMovie = (id: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: GET_MOVIE})
        try {
            const movie = await axios.get<MovieResponse>(`https://swapi.dev/api/films/${id}`);
            dispatch({type: GET_MOVIE_SUCCESS, payload: movie.data})
        } catch (err) {
            dispatch({type: GET_MOVIE_FAILURE, payload: err.message})
        }
    }
}