import React, { Component } from 'react';
import './SearchResult.css';
import ResultItem from '../ResultItem/ResultItem';

class SearchResult extends Component {
	render() {
		const items = this.props.results.map((item, i) =>
			<ResultItem { ...item } key={i} />
		);
		return (
			<div className="search__results">
				{items}
			</div>
		);
	}
}

export default SearchResult;
