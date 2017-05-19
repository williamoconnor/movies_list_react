import * as colors from '../colors';
import { css, StyleSheet } from 'aphrodite';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	actorName: {
		fontSize: 12,
	},
	container: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
	},
	x: {
		color: colors.red,
		marginLeft: 12,
		':hover': {
			cursor: 'pointer',
		},
	},
});

export default class AddedActor extends PureComponent {
	static propTypes = {
		actor: PropTypes.string.isRequired,
		remove: PropTypes.func.isRequired,
	};

	_removeActor = () => {
		this.props.remove(this.props.actor);
	};

	render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.actorName)}>{this.props.actor}</div>
				<div onClick={this._removeActor} className={css(styles.x)}>x</div>
			</div>
		);
	}
}
