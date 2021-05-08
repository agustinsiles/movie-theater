import React from 'react';
import MovieAvatar from '../movie-avatar/movie-avatar.component';

interface IMovieItemProps {
    clickHandler: (movieId: string) => void,
    movie: any
};

const MovieItem: React.FC<IMovieItemProps> = ({ clickHandler, movie }) => {
    return (
        <div
            onClick={() => clickHandler(movie.id)} 
            className="MovieItem">
            <MovieAvatar avatarUrl={movie.poster_path} />
            <h6>{movie.id}</h6>
        </div>
    );
};

export default MovieItem;