import React, { Component } from  'react';
import './ResultItem.css';

function shortenDesc(desc) {
	if (!desc) {
		return "";
	}
	let endIdx = desc.indexOf('.') + 1;
	while (endIdx < desc.length 
		&& desc.charAt(endIdx + 1) !== desc.charAt(endIdx + 1).toUpperCase()) {
		endIdx = desc.indexOf('.', endIdx) + 1;
	}
	const shortened = endIdx === desc.length ? desc : desc.substring(0, endIdx);
	return shortened;
}

class ResultItem extends Component {
	render() {
		const { title, subtitle, description, authors, img } = this.props;
		const book_img = img 
			? <img src={img} alt="book cover"/>
			: <span className="img__span">No image available</span>;
		return (
			<div className="result__item">
				<div className="item__left">
					{book_img}
				</div>
				<div className="item__right">
					<h2>{title}</h2>
					<h3>{subtitle}</h3>
					<h4>{authors ? authors.join(' & ') : ""}</h4>
					<p>{shortenDesc(description)}</p>
				</div>
			</div>
		);
	}
}

export default ResultItem;
