import React from "react";
import { v4 as uuidv4 } from "uuid";
import Book from "../Book/Books";

const books = [
	{ id: uuidv4(), title: "JavaScript Info 1", price: 11 },
	{ id: uuidv4(), title: "JavaScript Info 2", price: 9 },
	{ id: uuidv4(), title: "JavaScript Info 3", price: 7 },
];
const list = books.map((item) => {
	return <Book title={item.title} />;
});

function BooksList() {
	return <div>{list}</div>;
}

export default BooksList;
