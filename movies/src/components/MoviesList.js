import MoviesListRow from './MoviesListRow';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

export default class MoviesList extends PureComponent {
	static propTypes = {
		movies: PropTypes.array.isRequired,
	};

	render() {
		return (
			<div>
				{ this.props.movies.map((movie, i) => {
					<MoviesListRow dark={i % 2 === 1} movie={movie} />
				})}
			</div>
		);
	}
}
