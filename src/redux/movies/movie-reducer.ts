import { 
    FETCH_MOVIES,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIES_SUCCESS,
    SET_RATE_FILTER
} from './movie-actions';

const initialState = {
    error: false,
    movies: [],
    fetching: false,
    rate: 0
};

const movieReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {
        case FETCH_MOVIES: 
            return { ...state, error: false, fetching: true };
        case FETCH_MOVIES_ERROR:
            return { ...state, error: true, fetching: false };
        case FETCH_MOVIES_SUCCESS: 
            return {
                error: false, 
                movies: action.movies,
                fetching: false,
                rate: 0
            };
        case SET_RATE_FILTER:
            return { ...state, rate: action.rate };
        default: return state;
    }
};

export default movieReducer;