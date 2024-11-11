/* eslint-disable react/prop-types */
import React from "react";
import "./Book.css";

function Books({ id, title, price, isCompleted, handleIsCompleted }) {
	
	return (
		<div>
			<h2>{title}</h2>
			<p>{price}</p>
			
			<button
				type="button"
				onClick={() => {
					handleIsCompleted(id);
				}}
				style={{
					backgroundColor: isCompleted ? "green" : "white"
				}}
			>
				isCompleted
			</button>
			<button>Delete</button>
		</div>
	);
}

export default Books;
