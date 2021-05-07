import { Dispatch } from "react";

export const FETCH_SUGGESTED_MOVIES = 'FETCH_SUGGESTED_MOVIES';
export const FETCH_SUGGESTED_MOVIES_SUCCESS = 'FETCH_SUGGESTED_MOVIES_SUCCESS';
export const FETCH_SUGGESTED_MOVIES_ERROR = 'FETCH_SUGGESTED_MOVIES_ERROR';

export const FETCH_QUERIED_MOVIES = 'FETCH_QUERIED_MOVIES';
export const FETCH_QUERIED_MOVIES_SUCCESS = 'FETCH_QUERIED_MOVIES_SUCCESS';
export const FETCH_QUERIED_MOVIES_ERROR = 'FETCH_QUERIED_MOVIES_ERROR';

export const fetchSuggestedMovies = () => ({ type: FETCH_QUERIED_MOVIES });
export const fetchSuggestedMoviesFailed = () => ({ type: FETCH_SUGGESTED_MOVIES_ERROR });
export const fetchSuggestedMoviesSucceed = (movies: any[]) => ({ type: FETCH_SUGGESTED_MOVIES_SUCCESS, movies });

export const requestSuggestedMovies = () => (dispatch: Dispatch<any>) => dispatch(getSuggestedMovies());

const getSuggestedMovies = (): Dispatch<any> => (dispatch: Dispatch<any>) => {
    dispatch(fetchSuggestedMovies());

    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=253967d753de92310c2b05fb39808df8&language=en-US&sort_by=popularity.asc&include_video=false&page=1&with_watch_monetization_types=flatrate')
        .then(async (response: any) => {
            const data = await response.json();
            dispatch(fetchSuggestedMoviesSucceed(data.results));
        })
        .catch(err => {
            dispatch(fetchSuggestedMoviesFailed())
        });
};