/* eslint-disable react/prop-types */
import React from "react";
import "./Book.css";

function Books({ id, title, price, handleDone }) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{price}</p>

			<button
				onClick={() => {
					handleDone(id);
				}}
			>
				Done
			</button>
			<button>Delete</button>
		</div>
	);
}

export default Books;
