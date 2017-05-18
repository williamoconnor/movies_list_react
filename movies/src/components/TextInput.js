import * as colors from '../colors';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	container: {

	},
	label: {
		color: colors.darkGrey,
	},
});

export default class TextInput extends PureComponent {
	static propTypes = {
		label: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		value: PropTypes.string.isRequired,
	};

	render() {
		return (
			<div className={css(styles.container)}>
				{ this.props.label
					? <div className={css(styles.label)}>{this.props.label}</div>
					: null }
				<input type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} />
			</div>
		);
	}
}
