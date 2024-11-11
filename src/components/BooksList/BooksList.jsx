import React, { useContext, createContext, useState } from "react";
import Book from "../Book/Book";
import "./BooksList.css";
import { v4 as uuidv4 } from "uuid";

const initialBookList = [
	{
		id: uuidv4(),
		title: "JavaScript Info 1",
		price: 11,
		isCompleted: true,
	},
	{
		id: uuidv4(),
		title: "JavaScript Info 2",
		price: 9,
		isCompleted: false,
	},
	{
		id: uuidv4(),
		title: "JavaScript Info 3",
		price: 7,
		isCompleted: false,
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
				isCompleted: false,
				
			};
			setBooks([...books, newBook]);
			setBookTitle("");
			setBookPrice("");
		} else {
			alert("Please add a title!");
		}
	}

	function handleIsCompleted(id) {
				
		// const updateItem = books.find(item => item.id = id )
		// if(updateItem){
		// 	updateItem.isCompleted = !updateItem.isCompleted
		// }
		// 
		const updateBooks = books.map(item => {
			if(item.id == id){
				item.isCompleted = !item.isCompleted
				console.log(item.isCompleted)
			}
			return item
		})
		setBooks ([...updateBooks])

	}
	const booksList = books.map((book) => {
		return (
			<Book
				key={book.id}
				id={book.id}
				title={book.title}
				price={book.price}
				isCompleted={book.isCompleted}
				handleIsCompleted={handleIsCompleted}
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
