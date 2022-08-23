import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Book from './Book';
import AddBookForm from './AddBook';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const BookElements = books.map((book) => (
    <Book key={book.id} author={book.author} title={book.title} id={book.id} />
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
