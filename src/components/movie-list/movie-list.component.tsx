import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Movie from '../../classes/movie';
import MovieItem from '../movie-item/movie-item.component';
import RatingFilterContainer from '../rating-filter-container/rating-filter-container.component';
import './movie-list.component.scss';

type IMovieListProps = RouteComponentProps<{}> & {
    movies: Movie[],
};

const MovieList: React.FC<IMovieListProps> = ({ movies, history }) => {
    const onMovieClick = (movieId: string): void => { history.push(`/details/${movieId}`); };

    return (
        <div>
            <div className="RatesContainer">
                <RatingFilterContainer />
            </div>
            <div className="MovieList">
                {
                movies.length === 0 ? <p>No results were found.</p> : movies.map((movie: Movie, index: number) => (
                    <MovieItem
                        clickHandler={onMovieClick}
                        movie={movie} 
                        key={index}
                    />
                ))
                }
            </div>
        </div>
    );
};

export default withRouter(MovieList);