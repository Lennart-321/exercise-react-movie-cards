import { Movie } from "./AddMovie";

export default function MovieCard({ movie, remover }: { movie: Movie; remover: (m: Movie) => void }) {
    return (
        <article onClick={() => remover(movie)} id={movie.id.toString()} className="movie-card">
            <p className="movie-title">
                {movie.title} ({movie.id})
            </p>
            <p className="movie-rating">{movie.rating}</p>
            <p className="movie-genres">
                {movie.genres.reduce((res, gen) => res + (res.length ? " " : "") + gen.name, "")}
            </p>
            <p className="movie-description">{movie.description}</p>
        </article>
    );
}
