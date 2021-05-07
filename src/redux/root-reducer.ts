import { combineReducers } from 'redux';
import movieReducer from './movies/movie-reducer';

// we only have just one reducer for movies but as the app can scale we might need more reducers
export default combineReducers({
    movieReducer
});