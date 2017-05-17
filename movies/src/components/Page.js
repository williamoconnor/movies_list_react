import React, { PureComponent } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f00',
		height: '100vw',
		width: '100vh',
	},
});

export default class Page extends PureComponent {
	render() {
		return (
			<div className={css(styles.container)}>
				{this.props.children}
			</div>
		);
	}
}
