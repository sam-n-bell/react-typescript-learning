import axios from 'axios';
import { MovieResponse } from '../store/models/movies';
type typcode = {
    name: string;
}
export async function getMovie(): Promise<typcode> {
    const movie = await axios.get<typcode>(`https://my-json-server.typicode.com/typicode/demo/profile`);
    return movie.data;
}