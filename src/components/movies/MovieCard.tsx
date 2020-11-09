import React from 'react';
import {MovieInput} from './MovieInput';
import {MovieOutput} from './MovieOutput';
import {Card} from 'react-bootstrap';


export const MovieCard:React.FC = () => {
    return (
        <div>
            <Card>
             <Card.Body>
                 <Card.Title>
                     <MovieInput></MovieInput>
                 </Card.Title>
                 <Card.Text>
                     <MovieOutput></MovieOutput>
                 </Card.Text>
             </Card.Body>
         </Card>
        </div>
    )
}