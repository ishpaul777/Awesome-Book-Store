import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Book from './Book';
import AddBookForm from './AddBook';
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
    />
  ));
  return (
    <div>
      <Navbar />
      <main>
        <h2>Books</h2>
        {BookElements}
      </main>
      <AddBookForm />
    </div>
  );
};
export default BooksContainer;
