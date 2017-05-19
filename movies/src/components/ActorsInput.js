import { css, StyleSheet } from 'aphrodite';
import AddedActor from './AddedActor';
import Button from './Button';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

const styles = StyleSheet.create({
	addActorContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	addButton: {
		marginLeft: 8,
	},
	addedActorsContainer: {

	},
});

export default class ActorsInput extends PureComponent {
	static propTypes = {
		actors: PropTypes.array.isRequired,
		addActor: PropTypes.func.isRequired,
		removeActor: PropTypes.func.isRequired,
	};

	state = {
		actor: '',
	};

	_actorChanged = (actor) => {
		this.setState({
			actor,
		});
	};

	_addActor = () => {
		this.props.addActor(this.state.actor);
		this.setState({
			actor: '',
		});
	};

	_removeActor = (actor) => {
		this.props.removeActor(actor);
	};

	render() {
		return (
			<div>
				<div className={css(styles.addedActorsContainer)}>
					{ this.props.actors.length > 0
						? <div>Actors:</div>
						: null }
					{ this.props.actors.map((actor, i) => {
						return (<AddedActor actor={actor} remove={this._removeActor} key={`actor-${i}`} />);
					})}
				</div>
				<div className={css(styles.addActorContainer)}>
					<TextInput onChange={this._actorChanged} placeholder="Add Actor" value={this.state.actor} />
					<Button className={css(styles.addButton)} onClick={this._addActor} label="Add" />
				</div>
			</div>
		);
	}
}
