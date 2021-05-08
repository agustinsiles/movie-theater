import Movie from '../../classes/movie';
import { Rates } from '../../components/rating-star/rating-star.component';
import { 
    FETCH_MOVIES,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_BY_ID_SUCCESS,
    SET_RATE_FILTER
} from './movie-actions';

const initialState: { 
    activeMovie: Movie | null;
    error: boolean;
    movies: Movie[];
    fetching: boolean;
    rate: Rates
} = {
    activeMovie: null,
    error: false,
    movies: [],
    fetching: false,
    rate: 0
};

const movieReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {
        case FETCH_MOVIES: 
            return { ...state, activeMovie: null, error: false, fetching: true };
        case FETCH_MOVIES_ERROR:
            return { ...state, activeMovie: null, error: true, fetching: false };
        case FETCH_MOVIES_SUCCESS: 
            return {
                activeMovie: null, 
                error: false, 
                movies: action.movies,
                fetching: false,
                rate: 0
            };
        case FETCH_MOVIE_BY_ID_SUCCESS:
            return {
                ...state,
                activeMovie: action.movie
            };
        case SET_RATE_FILTER:
            return { ...state, rate: action.rate };
        default: return state;
    }
};

export default movieReducer;