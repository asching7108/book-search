import React, { Component } from 'react';
import './FilterBar.css';
import Filter from '../Filter/Filter';

class FilterBar extends Component {
	render() {
		return (
			<div className="filter__bar">
				<Filter 
					type="printType" 
					text="Print Type: "
					options={[
						"all",
						"books",
						"magazines"
					]}
					handleFilter={this.props.handleFilter} />
				<Filter 
					type="bookType" 
					text="Book Type: " 
					options={[
						"all",
						"partial",
						"full",
						"free-ebooks",
						"paid-ebooks",
						"ebooks"
					]}
					handleFilter={this.props.handleFilter} />
			</div>
		);
	}
}

export default FilterBar;
