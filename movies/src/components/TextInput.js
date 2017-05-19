import * as colors from '../colors';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	container: {
		marginBottom: 14,
		marginTop: 10,
	},
	input: {
		border: `1px solid ${colors.darkWhite}`,
		borderRadius: 2,
		height: 30,
		paddingLeft: 8,
	},
	label: {
		color: colors.darkGrey,
	},
});

export default class TextInput extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		value: PropTypes.string.isRequired,
	};

	_inputValueChanged = (e) => {
		this.props.onChange(e.target.value);
	}

	render() {
		const style = this.props.className ? this.props.className : css(styles.container);
		return (
			<div className={style}>
				<input className={css(styles.input)} type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this._inputValueChanged} />
			</div>
		);
	}
}
