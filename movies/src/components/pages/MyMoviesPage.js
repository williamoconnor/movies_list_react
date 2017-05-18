import MoviesList from '../MoviesList';
import Page from '../Page';
import React, { PureComponent } from 'react';
import TextInput from '../TextInput';

export default class MyMoviesPage extends PureComponent {
	state = {
		filteredMovies: [],
		movies: [],
		searchTerm: '',
	};

	_searchTermChanged = (searchTerm) => {
		this.setState({
			filteredMovies: this.state.movies.filter(movie => {
				return movie.title.indexOf('searchTerm') >= 0 ||
					movie.genre.indexOf('searchTerm') >= 0 ||
					movie.year.indexOf('searchTerm') >= 0 ||
					movie.rating === searchTerm ||
					movie.actors.join('').indexOf('searchTerm') >= 0;
			}),
			searchTerm,
		});
	};

	render() {
		return (
			<Page>
				<div>
					<h2>My Movies</h2>
					<TextInput onChange={this._searchTermChanged} />
					<MoviesList movies={this.state.filteredMovies} />
				</div>
			</Page>
		);
	}
}
