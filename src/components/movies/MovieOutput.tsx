import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
// import {GET_MOVIE} from '../../store/actions/movies'
import { MoviesState } from '../../store/reducers/movies'
import { RootState } from '../../store/reducers';

export const MovieOutput:React.FC = (props) => {

    // const movies = useSelector<RootState, MoviesState>(
    //     state => state.movies
    // ) //parses state object and gets required field

    const currentMovie = useSelector((state: RootState) => state.movies.currentMovie);

    const checkState = () => {
        console.log(currentMovie)
    }

    return (
            <span>
                { (currentMovie['title'] !== "") && <span>{currentMovie['title']}</span>}
            </span>
    )
}