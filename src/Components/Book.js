import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { RemoveBook } from '../redux/books/books';

const Book = ({ author, title, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(RemoveBook(id))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
