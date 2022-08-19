import React from 'react';
import Navbar from './Navbar';

import Book from './Book';

import AddBookForm from './AddBook';

const BooksContainer = () => {
  const books = [
    {
      author: 'ABC',
      title: 'Squid Games',
      id: 1,
    },
    {
      author: 'XYZ',
      title: 'The betst fns cd',
      id: 2,
    },
  ];

  const BookElements = books.map((book) => (
    <Book key={book.id} author={book.author} title={book.title} />
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
