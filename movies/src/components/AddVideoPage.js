import { css, StyleSheet } from 'aphrodite';
import ActorsInput from './ActorsInput';
import Dropdown from './Dropdown';
import Page from './Page';
import React, { PureComponent } from 'react';
import TextInput from './TextInput';

const styles = StyleSheet.create({
	container: {

	},
});

export default class AddVideoPage extends PureComponent {
	state = {
		actors: [],
		genre: '',
		rating: null,
		title: '',
		year: '',
	};

	render() {
		return (
			<Page>
				<div className={css(styles.container)}>
					<h2>Add New Movie</h2>
					<form>
						<TextInput />
						<ActorsInput />
						<TextInput />
						<TextInput />
						<Dropdown />
						<button>Add</button>
						<a href="/my-videos">Cancel</a>
					</form>
				</div>
			</Page>
		);
	}
}
