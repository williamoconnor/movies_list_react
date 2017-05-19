import * as colors from '../colors';
import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.white,
		border: `2px solid ${colors.blue1}`,
		color: colors.blue1,
		fontSize: 16,
		minWidth: 40,
		padding: '8px 18px 8px 18px',
	},
});

export default class Button extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	_click = (e) => {
		e.preventDefault();
		this.props.onClick();
	}

	render() {
		return (
			<div className={this.props.className}>
				<button className={css(styles.button)} onClick={this._click}>{this.props.label}</button>
			</div>
		);
	}
}
