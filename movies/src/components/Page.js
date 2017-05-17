import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f00',
		height: '100vh',
		width: '100vw',
		position: 'absolute',
		top: 0,
		left: 0,
	},
});

export default class Page extends PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
	};

	render() {
		return (
			<div className={css(styles.container)}>
				{this.props.children}
			</div>
		);
	}
}
