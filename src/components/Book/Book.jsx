/* eslint-disable react/prop-types */
import React from "react";
import "./Book.css";

function Books({ title, price }) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{price}</p>
		</div>
	);
}

export default Books;
