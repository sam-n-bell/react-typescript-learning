import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Col, Row, Container } from 'react-bootstrap';
import {Box, Container, Grid, Button} from '@material-ui/core'
import { getMovie } from '../../store/actions/movies';

export const MovieInput:React.FC = (props) => {
    const [id, setId] = useState<string | number | undefined>();
    const dispatch = useDispatch();
    const getMovieById = () => {
        // dispatch(getMovie(id));
        console.log('hi');
    }

    const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }


    return (
            <Grid container>
                <Grid item>
                    <input type="number" placeholder="Enter an Id" onChange={changeId} style={{width: "100%"}}></input>
                </Grid>
                <Grid item>
                    <Button onClick={getMovieById}>Get</Button>
                </Grid>
            </Grid>
    )
}