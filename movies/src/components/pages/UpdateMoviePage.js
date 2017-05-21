import * as storageKeys from '../../storageKeys';
import browserHistory from 'react-router/lib/browserHistory';
import { css, StyleSheet } from 'aphrodite';
import MovieForm from '../MovieForm';
import Page from '../Page';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
	container: {

	},
});

export default class UpdateMoviePage extends PureComponent {
	static propTypes = {
		params: PropTypes.object.isRequired,
	};

	constructor(props) {
		super(props);

		const movieID = parseInt(props.params.id, 10);
		this._setMovieWithID(movieID);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.params.id !== this.state.movie.id) {
			this._setMovieWithID(nextProps.params.id);
		}
	}

	_setMovieWithID = (id) => {
		const lsMovies = JSON.parse(localStorage.getItem(storageKeys.lsKey));
		const movies = lsMovies ? lsMovies[storageKeys.key] : [];

		const movieArr = movies.filter(movie => movie.id === id);
		if (movieArr.length === 0) {
			browserHistory.push('/my-movies');
		} else {
			this.state = {
				movie: movieArr[0],
			};
		}
	}

	_updateMovie = (u_movie) => {
		const lsMoviesJSON = localStorage.getItem(storageKeys.lsKey);
		const lsMovies = JSON.parse(lsMoviesJSON);
		const movies = lsMovies[storageKeys.key].map(movie => {
			return movie.id === u_movie.id ? u_movie : movie;
		});

		const moviesStore = {};
		moviesStore[storageKeys.key] = movies;
		localStorage.setItem(storageKeys.lsKey, JSON.stringify(moviesStore));
		browserHistory.push('/my-movies');
	}

	render() {
		return (
			<Page>
				<div className={css(styles.container)}>
					<h2>Update Movie</h2>
					<MovieForm movie={this.state.movie} submitLabel="Update Movie" submitAction={this._updateMovie} />
				</div>
			</Page>
		);
	}
}
