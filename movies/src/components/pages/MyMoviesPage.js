import * as storageKeys from '../../storageKeys';
import browserHistory from 'react-router/lib/browserHistory';
import { css, StyleSheet } from 'aphrodite';
import Button from '../Button';
import MoviesList from '../MoviesList';
import Page from '../Page';
import React, { PureComponent } from 'react';
import TextInput from '../TextInput';

const styles = StyleSheet.create({
	addMovieButton: {
		marginTop: 10,
	},
});

export default class MyMoviesPage extends PureComponent {
	constructor(props) {
		super(props);

		const lsMoviesJSON = localStorage.getItem(storageKeys.lsKey);
		const lsMovies = JSON.parse(lsMoviesJSON);
		const movies = lsMovies ? lsMovies[storageKeys.key] : [];

		this.state = {
			filteredMovies: movies,
			movies,
			searchTerm: '',
		};
	}

	_addMovieClicked = () => {
		browserHistory.push('/add-movie');
	}

	_removeMovie = (r_movie) => {
		const movies = this.state.movies.filter(movie => movie.id !== r_movie.id);

		const moviesStore = {};
		moviesStore[storageKeys.key] = movies;
		localStorage.setItem(storageKeys.lsKey, JSON.stringify(moviesStore));

		this.setState({
			filteredMovies: movies,
			movies,
			searchTerm: '',
		});
	}

	_updateMovie = (movieID) => {
		browserHistory.push(`/update-movie/${movieID}`);
	}

	_searchTermChanged = (searchTerm) => {
		if (searchTerm.length > 0) {
			this.setState({
				filteredMovies: this.state.movies.filter(movie => {
					return movie.title.indexOf(searchTerm) >= 0 ||
						movie.genre.indexOf(searchTerm) >= 0 ||
						movie.year.indexOf(searchTerm) >= 0 ||
						movie.rating === searchTerm ||
						movie.actors.join('').indexOf(searchTerm) >= 0;
				}),
				searchTerm,
			});
		} else {
			this.setState({
				filteredMovies: this.state.movies,
				searchTerm,
			});
		}
	};

	render() {
		return (
			<Page>
				<div>
					<h2>My Movies</h2>
					<TextInput placeholder="Search" onChange={this._searchTermChanged} value={this.state.searchTerm} />
					<MoviesList movies={this.state.filteredMovies} removeMovie={this._removeMovie} />
					<Button className={css(styles.addMovieButton)} label="Add Movie" onClick={this._addMovieClicked} />
				</div>
			</Page>
		);
	}
}
