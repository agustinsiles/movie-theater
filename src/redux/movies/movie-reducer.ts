import { 
    FETCH_SUGGESTED_MOVIES,
    FETCH_SUGGESTED_MOVIES_ERROR,
    FETCH_SUGGESTED_MOVIES_SUCCESS,
    FETCH_QUERIED_MOVIES,
    FETCH_QUERIED_MOVIES_ERROR,
    FETCH_QUERIED_MOVIES_SUCCESS
} from './movie-actions';

const initialState = {
    error: false,
    movies: [],
    fetching: false
};

const movieReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {
        case FETCH_SUGGESTED_MOVIES:
        case FETCH_QUERIED_MOVIES: 
            return { ...state, error: false, fetching: true };
        case FETCH_SUGGESTED_MOVIES_ERROR:
        case FETCH_QUERIED_MOVIES_ERROR: 
            return { ...state, error: true, fetching: false };
        case FETCH_SUGGESTED_MOVIES_SUCCESS:
        case FETCH_QUERIED_MOVIES_SUCCESS: 
            return {
                error: false, 
                movies: action.movies,
                fetching: false 
            };
        default: return state;
    }
};

export default movieReducer;