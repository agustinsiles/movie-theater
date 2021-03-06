import axios from 'axios';
import { Dispatch } from "react";
import Movie from "../../classes/movie";
import { Rates } from "../../components/rating-star/rating-star.component";

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const FETCH_MOVIE_BY_ID_SUCCESS = 'FETCH_MOVIE_BY_ID_SUCCESS';
export const SET_RATE_FILTER = 'SET_RATE_FILTER';
export const setRateFilter = (rate: Rates) => ({ type: SET_RATE_FILTER, rate });
export const requestMovies = (query?: string) => (dispatch: Dispatch<any>) => dispatch(getMovies(query));
export const requestMovieById = (movieId: string) => (dispatch: Dispatch<any>) => dispatch(getMovieById(movieId));

const apiKey = '253967d753de92310c2b05fb39808df8';

const getMovies = (query?: string): Dispatch<any> => (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCH_MOVIES });

    const url = !!query ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}` : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.asc&include_video=false&page=1`;
    return axios.get(url).then((response: any) => {
        const movies = response.data.results.map((movie: Movie) => {
            const { id, overview, poster_path, vote_average, title } = movie;
            return new Movie(id, overview, poster_path, vote_average, title);
        });

        dispatch(({ type: FETCH_MOVIES_SUCCESS, movies }))
    }).catch(() => {
        dispatch(({ type: FETCH_MOVIES_ERROR }));
    });
};

const getMovieById = (movieId: string): Dispatch<any> => (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCH_MOVIES });

    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`).then((response: any) => {        
        const { id, overview, poster_path, vote_average, title } = response.data;
        dispatch(({ type: FETCH_MOVIE_BY_ID_SUCCESS, movie: new Movie(id, overview, poster_path, vote_average, title) }));
    }).catch(() => {
        dispatch(({ type: FETCH_MOVIES_ERROR }));
    });
};