import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { addBookToServer } from '../redux/books/books';
import '../styles/AddBook.css';

export default function AddBookForm() {
  const [book, setBook] = useState({
    id: uuidv4(),
    title: '',
    author: '',
    category: '',
    currentChapter: '',
    totalChapter: '',
  });
  const handleChange = (e) => {
    setBook((prevBook) => ({ ...prevBook, [e.target.name]: e.target.value }));
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.author || !book.title || !book.category || !book.currentChapter || !book.totalChapter || book.category === '---Choose---') {
      // eslint-disable-next-line no-alert
      alert('Please fill in all the fields..');
      return;
    } if (Number.isNaN(parseInt(book.currentChapter, 10))
    || Number.isNaN(parseInt(book.totalChapter, 10))
    ) {
      // eslint-disable-next-line no-alert
      alert('Current Chapter and Total chapter should be Numbers!');
      return;
    }
    setBook((prevBook) => ({ ...prevBook, id: uuidv4() }));
    dispatch(addBookToServer(book));
    setBook((prevBook) => ({
      ...prevBook,
      title: '',
      author: '',
      category: '',
      currentChapter: '',
      totalChapter: '',
    }));
  };
  return (
    <section className="add--book--form--container">
      <h2 className="add--book--form--heading">Add a Book-</h2>
      <form className="add--book--form" onSubmit={handleSubmit}>
        <div className="add--book--form--input--fields">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={book.title}
            className="userInput Title"
            onChange={handleChange}
          />
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
            placeholder="Current Chapter.."
            name="currentChapter"
            value={book.currentChapter}
            className="userInput percentageRead"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Total Chapter.."
            name="totalChapter"
            value={book.totalChapter}
            className="userInput percentageRead"
            onChange={handleChange}
          />
          <label
            className="select--category"
            htmlFor="selectCategory"
          >
            Category
            {' '}
            <select
              value={book.category}
              onChange={handleChange}
              name="category"
              id="selectCategory"
            >
              <option>---Choose---</option>
              <option>Business</option>
              <option>Self-Help & Growth</option>
              <option>Fiction</option>
              <option>Action</option>
              <option>Other</option>
            </select>
          </label>
        </div>
        <button type="submit" className="btn submit--btn">
          Add Book
        </button>
      </form>
    </section>
  );
}
