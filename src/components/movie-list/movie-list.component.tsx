import React from 'react';
import MovieAvatar from '../movie-avatar/movie-avatar.component';

interface IMovieListProps {
    movies: any[]
};

const MovieList: React.FC<IMovieListProps> = ({ movies }) => (
    <div>
        {movies.map((movie, index) => <MovieAvatar avatarUrl={movie.poster_path} key={index} />)}
    </div>
);

export default MovieList;