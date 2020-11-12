import React from 'react';
import {MovieInput} from './MovieInput';
import {MovieOutput} from './MovieOutput';
import {Row, Col, Card} from 'react-bootstrap';


export const MovieCard:React.FC = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                 <Card.Title>
                     <MovieInput></MovieInput>
                 </Card.Title>
                 <hr/>
                 <Card.Text>
                     <MovieOutput></MovieOutput>
                 </Card.Text>
             </Card.Body>
         </Card>
    )
}