import { useState } from "react";

export default function AddMovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(1);
    const [description, setDescription] = useState("");

    const [genres, setGenres] = useState([false, false, false]);
    const allGenres: string[] = ["horror", "romcom", "scifi"];
    const genreNames: string[] = ["Horror", "Romantic Comedy", "Science Fiction"];
    const selectedGenres: string[] = [];
    genres.forEach((gSel, ix) => {
        if (gSel) selectedGenres.push(allGenres[ix]);
    });

    console.log("AddMove renderer:", title, rating, genres, description);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        console.log("Submit:", document.getElementById("titleIn")?.value, title);
        e.preventDefault();
    };

    const onGenreChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
        console.log(e.target, e.target.value);
        const value: boolean[] = [];
        for (let i = 0; i < e.target.children.length; i++) {
            console.log("option:", e.target.options[i].selected, e.target.options[i], e.target.children.item(i));
            value.push(e.target.options[i].selected);
        }
        console.log("option values:", value);
        setGenres(value);
    };

    return (
        <form onSubmit={onSubmit} id="addMovieForm">
            <div className="input">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="titleIn"
                    onChange={e => {
                        setTitle(e.target.value);
                        console.log("title onChange:", e.target.value);
                    }}
                    value={title}
                />
            </div>
            <div className="input">
                <label htmlFor="rating">Rating</label>
                <input
                    type="range"
                    name="rating"
                    id="ratingIn"
                    onChange={e => setRating(Number(e.target.value))}
                    value={rating}
                />
            </div>
            <div className="input">
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="genreIn" multiple value={selectedGenres} onChange={onGenreChange}>
                    {allGenres.map((g, ix) => (
                        <option key={g} value={g}>
                            {genreNames[ix]}
                        </option>
                    ))}
                </select>
            </div>
            <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="descriptionIn"
                    cols={30}
                    rows={10}
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                ></textarea>
            </div>
            <div>
                <input
                    onClick={() => {
                        console.log("Clear button onClick called!");
                        setTitle("");
                        setRating(0);
                        setGenres([false, false, true]);
                        setDescription("");
                    }}
                    type="button"
                    value="Clear"
                />
                <input type="submit" value="Add" />
            </div>
        </form>
    );
}
