import * as colors from '../colors';
import { css, StyleSheet } from 'aphrodite';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	default: {
		marginBottom: 14,
	},
	input: {
		height: 30,
		minWidth: 28,
	},
	label: {
		color: colors.darkGrey,
		fontSize: 14,
		marginRight: 8,
	},
});

export default class Dropdown extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		label: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		value: PropTypes.string.isRequired,
	};

	_valueChanged = (e) => {
		this.props.onChange(e.target.value);
	};

	render() {
		return (
			<div className={this.props.className ? this.props.className : css(styles.default)}>
				<span className={css(styles.label)}>{this.props.label}</span>
				<select className={css(styles.input)} onChange={this._valueChanged} value={this.props.value}>
					<option value="" />
					{ this.props.options.map((optionValue) => {
						return (<option value={optionValue}>{optionValue}</option>);
					})}
				</select>
			</div>
		);
	}
}
