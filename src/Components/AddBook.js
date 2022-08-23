import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { AddBook } from '../redux/books/books';

export default function AddBookForm() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    id: uuidv4(),
  });
  const handleChange = (e) => {
    setBook((prevBook) => ({ ...prevBook, [e.target.name]: e.target.value }));
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.author || !book.title) {
      // eslint-disable-next-line no-alert
      alert('Please fill in all the fields..');
      return;
    }
    setBook((prevBook) => ({ ...prevBook, id: uuidv4() }));
    dispatch(AddBook(book));
    setBook((prevBook) => ({
      ...prevBook,
      title: '',
      author: '',
    }));
  };
  return (
    <footer>
      <h2>Add a Book-</h2>
      <form className="inputForm" onSubmit={handleSubmit}>
        <div className="inputFields">
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={book.author}
            className="userInput Author"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={book.title}
            className="userInput Title"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="addBookButton">
          Add Book
        </button>
      </form>
    </footer>
  );
}
