export class Movie{
    constructor(
        public id: string,
        public title: string,
        public poster_path: string,
        public production_companies: Production[],
        public genres: Genre[],
        public overview: string,
        public tagline: string,
        public release_date: string,
        public adult: boolean,
        public runtime: number
    ){}
}

export class Production{
    constructor(
        public iso_3166_1: string,
        public name: string
    ){}
}

export class Genre{
    constructor(
        public id: string,
        public name: string
    ){}
}

export class Author{
    constructor(
        public username: string,
        public rating: string
    ){}
}