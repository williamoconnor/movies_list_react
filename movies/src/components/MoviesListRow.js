import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

export default class MoviesListRow extends PureComponent {
	static propTypes = {
		dark: PropTypes.bool,
		movie: PropTypes.object.isRequired,
	};

	render() {
		return (<div />);
	}
}
