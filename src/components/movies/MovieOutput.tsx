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

    const movies = useSelector((state: RootState) => state.movies);

    const checkState = () => {
        console.log(movies)
    }

    return (
            <span>
                <button onClick={checkState}>Get State</button>
            </span>
    )
}