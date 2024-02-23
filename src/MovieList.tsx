import { useState } from "react";
import { Movie } from "./AddMovie";
import MovieCard from "./MovieCard";

let currentMovies: Movie[] = [];
let setMoviesGlb: any = () => {};
export function addMovie0(movie: Movie) {
    console.log("addMovie:", movie.title);
    const moviesRenewed = currentMovies.slice(0);
    moviesRenewed.push(movie);
    setMoviesGlb(moviesRenewed);
}
//export let addMovie = (m: Movie) => { };
export const addMovie = function (movie: Movie) {
    console.log("addMovie:", movie.title);
    setMoviesGlb([...currentMovies, movie]);
};

export default function MovieList() {
    const [movies, setMovies]: [movies: Movie[], setMovies: any] = useState([]);
    currentMovies = movies;
    setMoviesGlb = setMovies;

    // addMovie = function (movie: Movie) {
    //     console.log("addMovie:", movie.title);
    //     const moviesRenewed = currentMovies.slice(0);
    //     moviesRenewed.push(movie);
    //     setMoviesGlb(moviesRenewed);
    // };

    function removeCard(movie: Movie) {
        let index = movies.indexOf(movie);
        console.log(
            "Remove:",
            movies.map(m => m.id),
            index,
            movie
        );

        if (index >= 0) {
            const moviesReduced = movies.slice(0);
            moviesReduced.splice(index, 1);
            setMovies(moviesReduced);
        }
    }

    return (
        <section id="movieList">
            {movies.map(m => (
                <MovieCard key={m.id} movie={m} remover={removeCard} />
            ))}
        </section>
    );
}
