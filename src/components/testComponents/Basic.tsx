import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { getMovie } from '../../services/MovieService';


export const Basic: React.FC = (props) => {

    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(false);


    const getMovieData = async () => {
        setLoading(true);
        setError(false);
        setMovie(null);
        try {
            const result = await getMovie();
            setMovie(result);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getMovieData();
        }
        fetchData();
    }, [])


    return (
        <div>
            <h1>hello, world</h1>
            ({movie !== null && (
                <div>{movie.name}</div>
            )})
        </div>
    )
}


// hello, world
// im here
// stringim here
// undefined
// eDEA
// undefined