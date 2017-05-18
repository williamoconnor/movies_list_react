import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import ActorsInput from './ActorsInput';
import Dropdown from './Dropdown';
import TextInput from './TextInput';

export default class MovieForm extends PureComponent {
	state = {
		actors: [],
		genre: '',
		rating: null,
		title: '',
		year: '',
	};

	render() {
		return (
			<div>
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
		);
	}
}
