import React, { PureComponent, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f00',
		height: '100vw',
		width: '100vh',
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
