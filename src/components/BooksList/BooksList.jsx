import React, { useContext, createContext, useState } from 'react';
import Book from '../Book/Book';
import './BooksList.css'
const initialBookList = [
  {
    title: 'JavaScript Info 1',
    price: 10,
  },
  {
    title: 'JavaScript Info 2',
    price: 7,
  },
  {
    title: 'JavaScript Info 3',
    price: 6,
  },
];

const Home = () => {
  //   function handleOnChangeNewInput(e) {
  //     setNewBookInput(e.target.value);
  //   }
  const [books, setBooks] = useState(initialBookList);
  const [bookTitle, setBookTitle] = useState('');
  const[bookPrice, setBookPrice]= useState('')

  function handleNewBookClick() {
    if (bookTitle != '') {
      const newBook = {
        title: bookTitle,
      };
      setBooks([...books, newBook]);
      setBookTitle('');
    } else {
      alert('Please add a title!')
    }
  }


  const booksList = books.map((book) => {
    return <Book title={book.title} price={book.price} />;
  });
  return (
    <div>
      <div className='addNewBook'>
        <div>
          <label htmlFor="newBook">Book Title: </label>
          <input
            type='text'
            id="newBook"
            value={bookTitle}
            // onChange={handleOnChangeNewInput}
            onChange={(e) => setBookTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor='bookPrice'>Book Price: </label>
          <input
            type="text"
            value={bookPrice}
            onChange = {e => setBookPrice(e.target.value)}
          />
        </div>


        <button onClick={handleNewBookClick} style={{ margin: '10px' }}>
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
