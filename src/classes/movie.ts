export default class Movie {    
    constructor(
        readonly id: string,
        readonly overview: string,
        readonly poster_path: string,
        readonly vote_average: number,
        readonly title: string
    ) {}
};