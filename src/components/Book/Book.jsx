import React from "react";
import './Book.css'


function Books({ title }) {
	return (
		<div>
			<h2>{title}</h2>
			<p>$11</p>
		</div>
	);
}

export default Books;
