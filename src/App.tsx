import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/home.component';
import MovieDetails from './pages/movie-details/movie-details.component';

const App: React.FC<{}> = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details/:movieId' component={MovieDetails} />
    </Switch>
);

export default App;
