import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovies } from '../../redux/movies/movie-actions';
import Error from '../../components/error/error.component';
import MovieList from './../../components/movie-list/movie-list.component';
import SearchBox from './../../components/search-box/search-box.component';
import Spinner from '../../components/spinner/spinner.component';

const Home: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const [ query, setQuery ] = useState<string>();
    const { movies, error, fetching, rate } = useSelector((state: any) => state.movieReducer);

    const onSearch = () => { dispatch(requestMovies(query)); };

    const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => { setQuery(event.target.value); };

    const renderMovieList = () => {
        if (error) return <Error />;
        if (fetching) return <Spinner />;

        const filteredMovies = rate !== 0 ? movies.filter((movie: any) => {
            const rateRange = rate - movie.vote_average;
            return rateRange >= 0 && rateRange <= 2;
        }) : [...movies];

        return <MovieList movies={filteredMovies} />;
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
