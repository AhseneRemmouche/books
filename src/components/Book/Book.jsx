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

	function handleDeleteClick(){
		// console.log('delete item')
		// const deleteBook = books.find(item =>{
		// 	return item.id == id
		// })
		const bookIndex = books.findIndex(item=> item.id == id)
		if(bookIndex != -1){
			const booksCopy = [...books]
			booksCopy.splice(bookIndex, 1)
			setBooks([...booksCopy])
		}
		console.log(id, bookIndex)
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
			<button className="btn" onClick={handleDeleteClick}>Delete</button>
		</div>
	);
}

export default Book;
