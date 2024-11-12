import { useState } from "react";
import BooksList from "./components/BooksList/BooksList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import BookContext from "./components/contexts/BookContext";

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

function App() {
	const [books, setBooks] = useState(initialBookList);

	return (
		<>
			<BookContext.Provider value={{ books, setBooks }}>
				<BooksList />
			</BookContext.Provider>
		</>
	);
}

export default App;
