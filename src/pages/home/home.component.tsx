import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestSuggestedMovies } from '../../redux/movies/movie-actions';
import MovieList from './../../components/movie-list/movie-list.component';
import SearchBox from './../../components/search-box/search-box.component';

const Home: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const { movies, error, fetching } = useSelector((state: any) => state.movieReducer);
    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    useEffect(() => {
        dispatch(requestSuggestedMovies());
    }, [dispatch]);

    if (error) {
        return <p>Error</p>;
    }

    if (fetching) {
        return <p>Fetching movies...</p>;
    }

    return (
        <div className="App">
            <SearchBox placeholder='Search for a movie...' change={onSearchChange} />
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
