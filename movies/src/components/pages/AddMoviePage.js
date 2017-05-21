import * as storageKeys from '../../storageKeys';
import browserHistory from 'react-router/lib/browserHistory';
import { css, StyleSheet } from 'aphrodite';
import MovieForm from '../MovieForm';
import Page from '../Page';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
	container: {

	},
});

export default class AddMoviePage extends PureComponent {
	_save = (movie) => {
		const lsMoviesJSON = localStorage.getItem(storageKeys.lsKey);
		const moviesObj = JSON.parse(lsMoviesJSON);
		moviesObj[storageKeys.key] = moviesObj[storageKeys.key].concat({
			...movie,
			id: moviesObj[storageKeys.key].length,
		});
		localStorage.setItem(storageKeys.lsKey, JSON.stringify(moviesObj));
		browserHistory.push('/my-movies');
	}

	render() {
		return (
			<Page>
				<div className={css(styles.container)}>
					<h2>Add New Movie</h2>
					<MovieForm submitAction={this._save} submitLabel="Add Movie" />
				</div>
			</Page>
		);
	}
}
