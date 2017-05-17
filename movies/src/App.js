import { hashHistory, Router, Route, Redirect } from 'react-router';
import AddVideoPage from './components/AddVideoPage';
import MyVideosPage from './components/MyVideosPage';
import React, { PureComponent } from 'react';
import SearchPage from './components/SearchPage';
import UpdateVideoPage from './components/UpdateVideoPage';

export default class App extends PureComponent {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/my-videos" component={MyVideosPage} />
				<Route path="/search" component={SearchPage} />
				<Route path="/add-video" component={AddVideoPage} />
				<Route path="/update-video" component={UpdateVideoPage} />
				<Redirect from="*" to="/my-videos" />
			</Router>
		);
	}
}
