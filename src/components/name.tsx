import React from 'react';
import { Card } from 'react-bootstrap';

type NameProps = {
    name: string
}

export const Name: React.FC<NameProps> = (props) => (
    <Card>
        <Card.Body>
            <Card.Title>Hello, {props.name}</Card.Title>
            <Card.Text>What's Going On</Card.Text>
        </Card.Body>
    </Card>
)