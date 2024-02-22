export default class Genre {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

export const allGenres: Genre[] = [
    new Genre("horror", "Horror"),
    new Genre("romcom", "Romantic Comedy"),
    new Genre("scifi", "Science Fiction"),
];
