import React from 'react';
import Movie from '../../classes/movie';
import MovieAvatar from '../movie-avatar/movie-avatar.component';
import './movie-item.component.scss';

interface IMovieItemProps {
    clickHandler: (movieId: string) => void,
    movie: Movie
};

const MovieItem: React.FC<IMovieItemProps> = ({ clickHandler, movie }) => {
    return (
        <div
            onClick={() => clickHandler(movie.id)} 
            className="MovieItem">
            <div className="AvatarWrapper">
                <MovieAvatar avatarUrl={movie.avatar} />
            </div>
            <h6>{movie.title}</h6>
        </div>
    );
};

export default MovieItem;