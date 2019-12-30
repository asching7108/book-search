import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import FilterBar from './FilterBar/FilterBar';
import SearchResult from './SearchResult/SearchResult';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			printType: 'all',
			bookType: 'all',
			results: []
		};
	}

	setResults(books) {
		this.setState({
			results: books
		});
	}

	searchBooks(searchTerm) {
		this.setState({
			searchTerm
		});
		const url = 'https://www.googleapis.com/books/v1/volumes';
		const params = {
			q: searchTerm,
			key: 'AIzaSyC6mTmMf5tsKzSwA4EUa2gCeoegfhtIvQw',
			printType: this.state.printType,
		};
		if (this.state.bookType !== "all") {
			params.filter = this.state.bookType;
		}
		const search_url = url + '?' + formatQueryParams(params);
		console.log(search_url);

		fetch(search_url)
			.then(res => {
				if (!res.ok) {
					throw new Error("Something went wrong.");
				}
				return res.json();
			})
			.then(data => {
				console.log(data);
				const books = data.items.map(item => {
					const img = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : null;
					return {
						id: item.id,
						title: item.volumeInfo.title,
						subtitle: item.volumeInfo.subtitle,
						authors: item.volumeInfo.authors,
						description: item.volumeInfo.description,
						img

					};
				});
				console.log(books);
				this.setResults(books);
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	}

	filterBooks(filter, option) {
		const p = new Promise((resolve, reject) => {
			this.setState({
				[filter]: option
			});
			resolve();
		});
		p.then(() => this.searchBooks(this.state.searchTerm));
	}

	render() {
		return (
			<main className="App">
				<header>
					<h1>Google Book Search</h1>
				</header>
				<SearchForm handleSearch={searchTerm => this.searchBooks(searchTerm)} />
				<FilterBar handleFilter={(filter, option) => this.filterBooks(filter, option)} />
				<SearchResult results={this.state.results} />
			</main>
		);
	}
}

export default App;
