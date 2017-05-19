import * as colors from '../colors';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	actorName: {
		marginLeft: 2,
		marginRight: 8,
	},
	container: {
		alignItems: 'center',
		border: `1px solid ${colors.darkWhite}`,
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto',
		maxWidth: 400,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
	},
	dark: {
		backgroundColor: colors.darkWhite,
	},
	update: {
		color: colors.blue1,
		fontSize: 12,
		marginBottom: 8,
	},
	x: {
		color: colors.red,
		':hover': {
			cursor: 'pointer',
		},
	},
});

export default class MoviesListRow extends PureComponent {
	static propTypes = {
		dark: PropTypes.bool,
		key: PropTypes.string,
		movie: PropTypes.object.isRequired,
		removeMovie: PropTypes.func.isRequired,
		updateMovie: PropTypes.func.isRequired,
	};

	_removeMovie = () => {
		this.props.removeMovie(this.props.movie.id);
	};

	_updateMovie = () => {
		this.props.updateMovie(this.props.movie.id)
	}

	render() {
		return (
			<div className={this.props.dark ? css(styles.container, styles.dark) : css(styles.container)}>
				<div>
					<div>Title: <strong>{this.props.movie.title}</strong></div>
					<div>Genre: <strong>{this.props.movie.genre}</strong></div>
					<div>Year: <strong>{this.props.movie.year}</strong></div>
					<div> Actors:
						{this.props.movie.actors.map(actor => {
							return (<strong key={`${this.props.key}-${actor}`} className={css(styles.actorName)}>{actor}</strong>);
						})}
					</div>
					<div>Rating: <strong>{this.props.movie.rating}</strong></div>
				</div>
				<div>
					<div onClick={this._updateMovie} className={css(styles.update)}>Update</div>
					<div onClick={this._removeMovie} className={css(styles.x)}>x</div>
				</div>
			</div>
		);
	}
}
