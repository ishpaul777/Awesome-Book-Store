import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
// eslint-disable-next-line import/no-named-as-default
import Book from './Book';
import AddBookForm from './AddBook';
import '../styles/BookContainer.css';
import { getBooksFromServer } from '../redux/books/books';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromServer());
  }, [dispatch]);

  const BookElements = books.map((book) => (
    <Book
      key={book.id}
      author={book.author}
      title={book.title}
      category={book.category}
      id={book.id}
      totalChapter={book.totalChapter}
      currentChapter={book.currentChapter}
    />
  ));
  // console.log(BookElements);
  return (
    <div>
      <Navbar />
      <main className="book--container">
        {BookElements}
        <hr style={{ width: '75vw' }} />
        <AddBookForm />
      </main>
    </div>
  );
};

export default BooksContainer;
