import * as colors from '../colors';
import * as storageKeys from '../storageKeys';
import browserHistory from 'react-router/lib/browserHistory';
import { css, StyleSheet } from 'aphrodite';
import ActorsInput from './ActorsInput';
import Button from './Button';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TextInput from './TextInput';

const styles = StyleSheet.create({
	cancel: {
		color: colors.blue1,
		fontSize: 12,
		marginTop: 10,
		textDecoration: 'none',
		':hover': {
			textDecoration: 'underline',
		},
	},
});

const ratingOptions = [1, 2, 3, 4, 5];

const initialState = {
	actors: [],
	genre: '',
	rating: 5,
	title: '',
	year: '',
};

export default class MovieForm extends PureComponent {
	static propTypes = {
		movie: PropTypes.object,
	};

	constructor(props) {
		super(props);

		this.state = props.movie ? props.movie : initialState;
	}

	_actorAdded = (actor) => {
		this.setState({
			actors: this.state.actors.concat(actor),
		});
	};

	_actorRemoved = (r_actor) => {
		this.setState({
			actors: this.state.actors.filter(actor => actor !== r_actor),
		});
	}

	_genreChanged = (genre) => {
		this.setState({
			genre,
		});
	};

	_ratingChanged = (rating) => {
		this.setState({
			rating,
		});
	}

	_titleChanged = (title) => {
		this.setState({
			title,
		});
	};

	_yearChanged = (year) => {
		this.setState({
			year,
		});
	};


	_save = () => {
		const lsMoviesJSON = localStorage.getItem(storageKeys.lsKey);
		const moviesObj = JSON.parse(lsMoviesJSON);
		moviesObj[storageKeys.key] = moviesObj[storageKeys.key].concat({
			...this.state,
			id: moviesObj[storageKeys.key].length,
		});
		localStorage.setItem(storageKeys.lsKey, JSON.stringify(moviesObj));
		this.setState({
			...initialState,
		});
		browserHistory.push('/my-movies');
	}

	render() {
		return (
			<div>
				<form>
					<TextInput onChange={this._titleChanged} placeholder="Title" value={this.state.title} />
					<ActorsInput actors={this.state.actors} addActor={this._actorAdded} removeActor={this._actorRemoved} />
					<TextInput onChange={this._genreChanged} placeholder="Genre" value={this.state.genre} />
					<TextInput onChange={this._yearChanged} placeholder="Year" value={this.state.year} />
					<Dropdown onChange={this._ratingChanged} options={ratingOptions} value={this.state.rating} />
					<Button onClick={this._save} label={'Add Movie'} />
					<div className={css(styles.cancel)}>
						<a className={css(styles.cancel)} href="/my-videos">Cancel</a>
					</div>
				</form>
			</div>
		);
	}
}
