/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./Book.css";
import BookContext from "../contexts/BookContext";

function Book({ id, title, price, isCompleted }) {
	const { books, setBooks } = useContext(BookContext);

	function handleIsCompleted() {
		const updatedBooks = books.map((item) => {
			if (item.id == id) {
				item.isCompleted = !item.isCompleted;
			}
			return item;
		});

		setBooks([...updatedBooks]);
	}

	function handleDeleteClick() {
		const updatedBooks = books.filter((item) => item.id != id);
		setBooks([...updatedBooks]);
	}

	return (
		<div className="container">
			<h2>{title}</h2>
			<p>${price}</p>

			<button
				className="btn"
				type="button"
				onClick={() => {
					handleIsCompleted();
				}}
				style={{
					backgroundColor: isCompleted ? "green" : "white",
				}}
			>
				isCompleted
			</button>
			<button className="btn" onClick={handleDeleteClick}>
				Delete
			</button>
		</div>
	);
}

export default Book;
