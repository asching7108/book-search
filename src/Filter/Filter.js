import React, { Component } from  'react';
import './Filter.css';

class Filter extends Component {
	render() {
		const { type, text, options, handleFilter } = this.props;
		const optionTags = options.map((option, i) => 
			<option value={option} key={i}>{option}</option>
		);
		return (
			<div className="filter">
				<form>
					<label htmlFor={type}>{text}</label>
					<select id={type} name={type} onChange={e => handleFilter(type, e.target.value)}>
						{optionTags}
					</select>
				</form>
			</div>
		);
	}
}

export default Filter;
