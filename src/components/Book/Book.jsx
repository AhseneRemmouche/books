/* eslint-disable react/prop-types */
import React from "react";
import "./Book.css";

function Books({ id, title, price }) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{price}</p>

			<button
				onClick={() => {
					console.log({ read: true });
				}}
			>
				Done
			</button>
			<button>Delete</button>
		</div>
	);
}

export default Books;
