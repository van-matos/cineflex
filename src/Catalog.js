import {useEffect, useState} from "react";
import axios from "axios";

import Movie from './Movie';

export default function Catalog() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then((response) => setMovies(response.data));
    }, []);

    return (
        <div className="content">
            <div className="instruction">Selecione o filme</div>
            <div className="catalog"> 
                {movies.map( (movie) => <Movie key={movie.id} id={movie.id} title={movie.title} posterURL={movie.posterURL} overviwe={movie.overviwe} release={movie.releaseDate} />)}
            </div>
        </div>
    )
}
