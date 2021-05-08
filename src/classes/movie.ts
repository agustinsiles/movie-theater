export default class Movie {
    constructor(
        readonly id: string,
        readonly overview: string,
        readonly poster_path: string,
        readonly vote_average: number,
        readonly title: string
    ) {}

    get avatar(): string {
        return this.poster_path === null ? 'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg' : `https://image.tmdb.org/t/p/w500/${this.poster_path}`;
    }
};