import React from 'react';
import MovieAvatar from '../movie-avatar/movie-avatar.component';
import RatingFilterContainer from '../rating-filter-container/rating-filter-container.component';
import './movie-list.component.scss';
interface IMovieListProps {
    movies: any[]
};

const MovieList: React.FC<IMovieListProps> = ({ movies }) => (
    <div>
        <div className="RatesContainer">
            <RatingFilterContainer />
        </div>
        <div className="MovieList">
            {movies.length === 0 ? <p>No results were found.</p> : movies.map((movie, index) => <MovieAvatar avatarUrl={movie.poster_path} key={index} />)}
        </div>
    </div>
);

export default MovieList;