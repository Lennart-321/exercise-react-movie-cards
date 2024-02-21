export default function AddMovie() {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        console.log(document.getElementById("titleIn")?.value);
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit} id="addMovieForm">
            <div className="input">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="titleIn" />
            </div>
            <div className="input">
                <label htmlFor="rating">Rating</label>
                <input type="range" name="rating" id="ratingIn" />
            </div>
            <div className="input">
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="genreIn">
                    <option value="horror">Horror</option>
                    <option value="romcom">Romatik Comedy</option>
                    <option value="scifi">Science Fiction</option>
                </select>
            </div>
            <div className="input">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="descriptionIn" cols={30} rows={10}></textarea>
            </div>
            <div>
                <input
                    onClick={() => {
                        document.getElementById("titleIn").value = "";
                    }}
                    type="button"
                    value="Clear"
                />
                <input type="submit" value="Add" />
            </div>
        </form>
    );
}
