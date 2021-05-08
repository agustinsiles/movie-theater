import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { requestMovieById } from '../../redux/movies/movie-actions';
import MovieAvatar from '../../components/movie-avatar/movie-avatar.component';
import Spinner from '../../components/spinner/spinner.component';
import Error from './../../components/error/error.component';
import './movie-details.component.scss';

type PathParamsType = {
    movieId: string
};

const MovieDetails: React.FC<RouteComponentProps<PathParamsType>> = ({ match }) => {
    const movieId: string = match.params.movieId;
    const { activeMovie: movie, fetching, error } = useSelector((state: any) => state.movieReducer);
    const dispatch = useDispatch();

    const renderMovieDetails = () => {
        if (fetching) return <Spinner />;
        if (error) return <Error />;

        if (movie !== null) {
            return (
                <div>
                    <MovieAvatar avatarUrl={movie.avatar} />
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Average rate: {movie.vote_average}</p>
                </div>
            );
        }
    };

    useEffect(() => {
        if (!!movieId) dispatch(requestMovieById(movieId));
    }, [dispatch, movieId]);
    
    return (
        <div className="MovieDetails">
            {renderMovieDetails()}
        </div>
    );
};

export default MovieDetails;