import { Dispatch } from "react";
import { Rates } from "../../components/rating-star/rating-star.component";

export const FETCH_MOVIES = 'FETCH_SUGGESTED_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_SUGGESTED_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_SUGGESTED_MOVIES_ERROR';

export const SET_RATE_FILTER = 'SET_RATE_FILTER';

export const fetchMoviesFailed = () => ({ type: FETCH_MOVIES_ERROR });
export const fetchMoviesSucceed = (movies: any[]) => ({ type: FETCH_MOVIES_SUCCESS, movies });

export const setRateFilter = (rate: Rates) => ({ type: SET_RATE_FILTER, rate });

const fetchMovies = () => ({ type: FETCH_MOVIES });

export const requestMovies = (query?: string) => (dispatch: Dispatch<any>) => dispatch(getMovies(query));

const getMovies = (query?: string): Dispatch<any> => (dispatch: Dispatch<any>) => {
    dispatch(fetchMovies());

    const apiKey = '253967d753de92310c2b05fb39808df8';
    const url = !!query ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}` : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.asc&include_video=false&page=1`;
    return fetch(url).then(async (response: any) => {
        const data = await response.json();
        dispatch(fetchMoviesSucceed(data.results));
    }).catch(() => {
        dispatch(fetchMoviesFailed());
    });
};