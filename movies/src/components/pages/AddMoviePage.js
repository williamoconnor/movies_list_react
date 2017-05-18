import { css, StyleSheet } from 'aphrodite';
import MovieForm from '../MovieForm';
import Page from '../Page';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
	container: {

	},
});

export default class AddMoviePage extends PureComponent {
	render() {
		return (
			<Page>
				<div className={css(styles.container)}>
					<h2>Add New Movie</h2>
					<MovieForm />
				</div>
			</Page>
		);
	}
}
