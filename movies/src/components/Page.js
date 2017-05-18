import * as colors from '../colors';
import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
	container: {
		fontFamily: 'Helvetica, sans-serif',
		height: '100vh',
		left: 0,
		position: 'absolute',
		top: 0,
		width: '100vw',
	},
	content: {
		margin: 'auto',
		maxWidth: 1000,
	},
	header: {
		backgroundColor: colors.blue1,
		color: colors.white,
		letterSpacing: 1.4,
		// position: 'absolute',
		textAlign: 'center',
		marginTop: 0,
		paddingTop: 40,
		paddingBottom: 40,
		width: '100%',
	},
});

export default class Page extends PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
	};

	render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.header)}>
					<h1>Movies!</h1>
				</div>
				<div className={css(styles.content)}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
