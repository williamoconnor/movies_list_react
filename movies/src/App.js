import * as storageKeys from './storageKeys';
import browserHistory from 'react-router/lib/browserHistory';
import { Router, Route, Redirect } from 'react-router';
import AddMoviePage from './components/pages/AddMoviePage';
import MyMoviesPage from './components/pages/MyMoviesPage';
import React, { PureComponent } from 'react';
import UpdateMoviePage from './components/pages/UpdateMoviePage';

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		const moviesStore = {};

		const lsMovies = JSON.parse(localStorage.getItem(storageKeys.lsKey));
		const movies = lsMovies ? lsMovies[storageKeys.key] : [];
		moviesStore[storageKeys.key] = movies;
		localStorage.setItem(storageKeys.lsKey, JSON.stringify(moviesStore));
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path="my-movies" component={MyMoviesPage} />
				<Route path="add-movie" component={AddMoviePage} />
				<Route path="update-movie/:id" component={UpdateMoviePage} />
				<Redirect from="*" to="my-movies" />
			</Router>
		);
	}
}
