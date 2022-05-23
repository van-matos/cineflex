import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

import Movie from './Movie';

export default function Catalog() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => setMovies(response.data));
    }, []);

    return (
        <div className="content">
            <div className="instruction">Selecione o filme</div>
            <MovieList> 
                {movies.map( (movie) => <Movie key={movie.id} id={movie.id} title={movie.title} posterURL={movie.posterURL} overview={movie.overview} release={movie.releaseDate} />)}
            </MovieList>
        </div>
    )
}

const MovieList = styled.div `
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`