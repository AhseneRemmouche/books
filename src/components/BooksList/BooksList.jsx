import React, { useContext, createContext, useState } from "react";
import Book from "../Book/Book";
import "./BooksList.css";
import { v4 as uuidv4 } from "uuid";

const initialBookList = [
	{
		id: uuidv4(),
		title: "JavaScript Info 1",
		price: 11,
		read: false,
	},
	{
		id: uuidv4(),
		title: "JavaScript Info 2",
		price: 9,
		read: false,
	},
	{
		id: uuidv4(),
		title: "JavaScript Info 3",
		price: 7,
		read: false,
	},
];

const Home = () => {
	//   function handleOnChangeNewInput(e) {
	//     setNewBookInput(e.target.value);
	//   }
	const [books, setBooks] = useState(initialBookList);
	const [bookTitle, setBookTitle] = useState("");
	const [bookPrice, setBookPrice] = useState("");

	function handleNewBookClick() {
		if (bookTitle != "") {
			const newBook = {
				id: uuidv4(),
				title: bookTitle,
				price: bookPrice,
				read: false,
				handleDone: handleDone,
			};
			setBooks([...books, newBook]);
			setBookTitle("");
			setBookPrice("");
		} else {
			alert("Please add a title!");
		}
	}

	function handleDone(id) {
		console.log("this is is from parent", { id });
	}
	const booksList = books.map((book) => {
		return (
			<Book
				key={book.id}
				id={book.id}
				title={book.title}
				price={book.price}
				read={book.read}
				handleDone={handleDone}
			/>
		);
	});
	return (
		<div>
			<div className="addNewBook">
				<div>
					<label htmlFor="newBook">Book Title: </label>
					<input
						type="text"
						id="newBook"
						value={bookTitle}
						// onChange={handleOnChangeNewInput}
						onChange={(e) => setBookTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="bookPrice">Book Price: </label>
					<input
						type="text"
						value={bookPrice}
						onChange={(e) => setBookPrice(e.target.value)}
					/>
				</div>

				<button onClick={handleNewBookClick} style={{ margin: "10px" }}>
					Add Book
				</button>
			</div>
			<div className="booksList">
				<h1>Books List</h1>
				{booksList}
			</div>
		</div>
	);
};

export default Home;
