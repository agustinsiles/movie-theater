import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { requestMovieById } from '../../redux/movies/movie-actions';
import MovieAvatar from '../../components/movie-avatar/movie-avatar.component';
import Spinner from '../../components/spinner/spinner.component';
import Error from './../../components/error/error.component';
import './movie-details.component.scss';
import { IMovieReducer } from '../../redux/movies/movie-reducer';

type PathParamsType = {
    movieId: string
};

const MovieDetails: React.FC<RouteComponentProps<PathParamsType>> = ({ match }) => {
    const movieId: string = match.params.movieId;
    const { activeMovie: movie, fetching, error } = useSelector((state: any): IMovieReducer => state.movieReducer);
    const dispatch = useDispatch();

    const renderMovieDetails = () => {
        if (fetching) return <Spinner />;
        if (error) return <Error />;

        if (movie !== null) {
            return (
                <div className="MovieDetails">
                    <MovieAvatar avatarUrl={movie.avatar} />
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>Average rate: {movie.vote_average}</p>
                        <Link to='/'>Go back</Link>
                    </div>
                </div>
            );
        }
    };

    useEffect(() => {
        if (!!movieId) dispatch(requestMovieById(movieId));
    }, [dispatch, movieId]);
    
    return (
        <div className="container">
            {renderMovieDetails()}
        </div>
    );
};

export default MovieDetails;