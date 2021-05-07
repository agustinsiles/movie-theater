import { 
    FETCH_MOVIES,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIES_SUCCESS
} from './movie-actions';

const initialState = {
    error: false,
    movies: [],
    fetching: false
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
                fetching: false 
            };
        default: return state;
    }
};

export default movieReducer;