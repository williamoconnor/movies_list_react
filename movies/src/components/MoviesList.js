import MoviesListRow from './MoviesListRow';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	emptyData: {
		marginTop: 30,
		marginBottom: 20,
	},
});

export default class MoviesList extends PureComponent {
	static propTypes = {
		movies: PropTypes.array.isRequired,
		removeMovie: PropTypes.func.isRequired,
		updateMovie: PropTypes.func.isRequired,
	};

	_renderMovies = () => {
		return this.props.movies.map((movie, i) => {
			return (
				<MoviesListRow
					dark={i % 2 === 1}
					movie={movie} key={`movie-${i}`}
					removeMovie={this.props.removeMovie}
					updateMovie={this.props.updateMovie} />
			);
		});
	}

	render() {
		return (
			<div>
				{ this.props.movies.length > 0
					? this._renderMovies()
					: <div className={css(styles.emptyData)}>No Movies Found</div>}
			</div>
		);
	}
}
