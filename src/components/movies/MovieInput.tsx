import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
// import {GET_MOVIE} from '../../store/actions/movies'
import { getMovie } from '../../store/actions/movies';

export const MovieInput:React.FC = (props) => {
    const [id, setId] = useState<string | number | undefined>();
    const dispatch = useDispatch();
    const getMovieById = () => {
        dispatch(getMovie(id));
    }

    const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    

    return (
        <Container fluid>
            <Row>
                <Col>
                    <input type="number" placeholder="Enter an Id" onChange={changeId}></input>
                </Col>
                <Col>
                    <button onClick={getMovieById}>Get</button>
                </Col>
            </Row>
        </Container>
    )
}