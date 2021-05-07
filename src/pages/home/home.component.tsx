import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovies } from '../../redux/movies/movie-actions';
import MovieList from './../../components/movie-list/movie-list.component';
import SearchBox from './../../components/search-box/search-box.component';

const Home: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const [ query, setQuery ] = useState<string>();
    const { movies, error, fetching } = useSelector((state: any) => state.movieReducer);

    const onSearch = () => { dispatch(requestMovies(query)); };

    const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => { setQuery(event.target.value); };

    const renderMovieList = () => {
        if (error) return <p>Error</p>;
    
        if (fetching) return <p>Fetching movies...</p>;

        return <MovieList movies={movies} />;
    };

    useEffect(() => {
        dispatch(requestMovies());
    }, [dispatch]);

    return (
        <div className="Home">
            <SearchBox 
                placeholder='Search for a movie...' 
                searchHandler={onSearch}
                changeHandler={onQueryChange}
            />
            {renderMovieList()}
        </div>
    );
};

export default Home;
