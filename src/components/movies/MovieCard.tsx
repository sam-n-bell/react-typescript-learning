import React from 'react';
import {MovieInput} from './MovieInput';
import {MovieOutput} from './MovieOutput';
// import {Row, Col, Card} from 'react-bootstrap';
import {Card, CardActions, CardContent} from '@material-ui/core';


export const MovieCard:React.FC = () => {
    return (
        <Card variant="outlined">
            <CardContent>
                <MovieInput/>
            </CardContent>
            <CardActions>
                <MovieOutput/>
            </CardActions>
         </Card>
    )
}