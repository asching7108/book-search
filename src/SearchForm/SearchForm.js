import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		};
	}

	updateSearchTerm(newVal) {
		this.setState({
			searchTerm: newVal
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSearch(this.state.searchTerm);
	}

	render() {
		return (
			<div className="search__bar">
				<form 
					className="search__form"
					onSubmit={e => this.handleSubmit(e)}>
					<label htmlFor="searchTerm">Search: </label>
					<input
						type="text"
						id="searchTerm"
						name="searchTerm"
						onChange={e => this.updateSearchTerm(e.target.value)}
					/>
					<button type="submit">Search</button>
				</form>
			</div>
		);
	}
}

export default SearchForm;
